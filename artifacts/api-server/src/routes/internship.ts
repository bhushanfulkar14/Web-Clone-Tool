import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { internshipApplicationsTable, insertInternshipApplicationSchema } from "@workspace/db";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router: IRouter = Router();

async function sendEmail(application: {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  domain: string;
  skills: string;
  message?: string | null;
}) {
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

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0d1a;color:#fff;padding:32px;border-radius:12px;">
      <div style="text-align:center;margin-bottom:24px;">
        <div style="display:inline-block;background:linear-gradient(135deg,#4f6ef7,#7c3aed);border-radius:12px;width:56px;height:56px;line-height:56px;font-size:28px;font-weight:900;color:#fff;margin-bottom:8px;">N</div>
        <h2 style="color:#fff;margin:0;">NexGen BR Technologies</h2>
        <p style="color:#06b6d4;margin:4px 0 0;">New Internship Application Received</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;color:#9ca3af;width:140px;">Domain</td><td style="padding:10px 0;color:#fff;font-weight:600;">${application.domain}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Full Name</td><td style="padding:10px 0;color:#fff;">${application.name}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Email</td><td style="padding:10px 0;color:#4f6ef7;">${application.email}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Phone</td><td style="padding:10px 0;color:#fff;">${application.phone}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">College</td><td style="padding:10px 0;color:#fff;">${application.college}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Year</td><td style="padding:10px 0;color:#fff;">${application.year}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Skills</td><td style="padding:10px 0;color:#fff;">${application.skills}</td></tr>
        ${application.message ? `<tr><td style="padding:10px 0;color:#9ca3af;vertical-align:top;">Message</td><td style="padding:10px 0;color:#fff;">${application.message}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #1f2937;text-align:center;color:#6b7280;font-size:12px;">
        NexGen BR Technologies &mdash; info@nexgenbrtechnologies.com
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"NexGen BR Technologies" <${smtpUser}>`,
    to: "info@nexgenbrtechnologies.com",
    replyTo: application.email,
    subject: `New Internship Application: ${application.domain} — ${application.name}`,
    html,
  });
}

router.post("/internship/apply", async (req, res) => {
  const parsed = insertInternshipApplicationSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    return;
  }

  try {
    const [saved] = await db
      .insert(internshipApplicationsTable)
      .values(parsed.data)
      .returning();

    try {
      await sendEmail(parsed.data);
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
