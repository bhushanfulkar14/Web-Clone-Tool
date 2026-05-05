import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { internshipApplicationsTable, insertInternshipApplicationSchema } from "@workspace/db";
import nodemailer from "nodemailer";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// Extend the schema to accept optional resume fields (not stored in DB)
const applySchema = insertInternshipApplicationSchema.extend({
  resumeBase64:   z.string().optional(),
  resumeFileName: z.string().optional(),
});

interface EmailOpts {
  name: string; email: string; phone: string;
  college: string; year: string; domain: string;
  skills: string; message?: string | null;
  resumeBase64?: string; resumeFileName?: string;
}

async function sendEmail(application: EmailOpts) {
  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];

  if (!smtpUser || !smtpPass) {
    logger.warn("SMTP_USER or SMTP_PASS not set — skipping email notification");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const rows: [string, string][] = [
    ["Domain",    application.domain],
    ["Full Name", application.name],
    ["Email",     application.email],
    ["Phone",     application.phone],
    ["College",   application.college],
    ["Year",      application.year],
    ["Skills",    application.skills],
  ];
  if (application.message) rows.push(["Message", application.message]);

  const tableRows = rows
    .map(([k, v]) => `
      <tr>
        <td style="padding:9px 14px;color:#9ca3af;width:130px;font-size:13px;border-bottom:1px solid #1f2937;">${k}</td>
        <td style="padding:9px 14px;color:#f3f4f6;font-size:13px;border-bottom:1px solid #1f2937;">${v}</td>
      </tr>`)
    .join("");

  const html = `
    <div style="font-family:'Segoe UI',sans-serif;max-width:620px;margin:0 auto;background:#0a0d1a;color:#fff;border-radius:16px;overflow:hidden;border:1px solid #1f2937;">
      <div style="background:linear-gradient(135deg,#4f6ef7,#06b6d4);padding:28px 32px;text-align:center;">
        <div style="display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.15);border-radius:14px;width:56px;height:56px;font-size:28px;font-weight:900;color:#fff;margin-bottom:10px;">N</div>
        <h1 style="margin:0;font-size:22px;font-weight:800;color:#fff;">NexGen BR Technologies</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">📋 New Internship Application</p>
      </div>

      <div style="padding:28px 32px;">
        <div style="background:#111827;border-radius:12px;overflow:hidden;margin-bottom:20px;">
          <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
        </div>

        ${application.resumeBase64 && application.resumeFileName
          ? `<div style="background:#1f2937;border-radius:10px;padding:14px 16px;margin-bottom:20px;display:flex;align-items:center;gap:12px;">
              <span style="font-size:22px;">📎</span>
              <div>
                <p style="margin:0;font-size:13px;font-weight:600;color:#f3f4f6;">Resume Attached</p>
                <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">${application.resumeFileName}</p>
              </div>
             </div>`
          : ""}

        <div style="background:#0d1f3c;border:1px solid #1e3a6030;border-radius:10px;padding:14px 16px;">
          <p style="margin:0;font-size:13px;color:#60a5fa;font-weight:600;">⚡ Action Required</p>
          <p style="margin:6px 0 0;font-size:13px;color:#9ca3af;">Please review this application and respond within 2–3 business days.</p>
        </div>
      </div>

      <div style="padding:20px 32px;border-top:1px solid #1f2937;text-align:center;">
        <p style="margin:0;font-size:12px;color:#4b5563;">NexGen BR Technologies &mdash; info@nexgenbrtechnologies.com</p>
        <p style="margin:4px 0 0;font-size:11px;color:#374151;">Wardha, Nagpur, Maharashtra, India</p>
      </div>
    </div>
  `;

  const attachments: { filename: string; content: string; encoding: "base64" }[] = [];
  if (application.resumeBase64 && application.resumeFileName) {
    attachments.push({
      filename: application.resumeFileName,
      content:  application.resumeBase64.split(",")[1] ?? application.resumeBase64,
      encoding: "base64",
    });
  }

  await transporter.sendMail({
    from:        `"NexGen BR Technologies" <${smtpUser}>`,
    to:          "info@nexgenbrtechnologies.com",
    replyTo:     application.email,
    subject:     `📋 New Internship Application: ${application.domain} — ${application.name}`,
    html,
    attachments,
  });
}

router.post("/internship/apply", async (req, res) => {
  const parsed = applySchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    return;
  }

  const { resumeBase64, resumeFileName, ...dbData } = parsed.data;

  try {
    // Save to DB (without resume binary)
    const [saved] = await db
      .insert(internshipApplicationsTable)
      .values(dbData)
      .returning();

    // Send email (with resume attachment if provided)
    try {
      await sendEmail({ ...dbData, resumeBase64, resumeFileName });
    } catch (emailErr) {
      req.log.warn({ err: emailErr }, "Email sending failed — application still saved");
    }

    res.status(201).json({ success: true, id: saved.id });
  } catch (err) {
    req.log.error({ err }, "Failed to save internship application");
    res.status(500).json({ error: "Failed to submit application. Please try again." });
  }
});

router.get("/internship/applications", async (req, res) => {
  try {
    const applications = await db
      .select()
      .from(internshipApplicationsTable)
      .orderBy(internshipApplicationsTable.createdAt);
    res.json(applications);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch applications");
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
