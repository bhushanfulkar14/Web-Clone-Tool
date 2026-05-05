import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const trainerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  experience: z.string().min(1),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  skills: z.string().min(1),
  bio: z.string().min(10),
  resumeBase64: z.string().optional(),
  resumeFileName: z.string().optional(),
});

const studentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  college: z.string().min(2),
  year: z.string().min(1),
  domain: z.string().min(1),
  skills: z.string().optional(),
  resume: z.string().optional(),
  message: z.string().optional(),
  resumeBase64: z.string().optional(),
  resumeFileName: z.string().optional(),
});

interface HireEmailOpts {
  type: "trainer" | "student";
  data: Record<string, unknown>;
  resumeBase64?: string;
  resumeFileName?: string;
}

async function sendHireEmail({ type, data, resumeBase64, resumeFileName }: HireEmailOpts) {
  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];

  if (!smtpUser || !smtpPass) {
    logger.warn("SMTP not configured — skipping hire email");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const isTrainer = type === "trainer";
  const displayData = { ...data };
  delete displayData["resumeBase64"];
  delete displayData["resumeFileName"];

  const rows = Object.entries(displayData)
    .filter(([, v]) => v)
    .map(([k, v]) =>
      `<tr>
        <td style="padding:8px 12px;color:#9ca3af;width:150px;text-transform:capitalize;font-size:13px;border-bottom:1px solid #1f2937;">${k.replace(/([A-Z])/g, " $1")}</td>
        <td style="padding:8px 12px;color:#f3f4f6;font-size:13px;border-bottom:1px solid #1f2937;">${v}</td>
      </tr>`
    )
    .join("");

  const accentColor = isTrainer ? "#a78bfa" : "#06b6d4";
  const label = isTrainer ? "Trainer" : "Student / Fresher";

  const html = `
    <div style="font-family:'Segoe UI',sans-serif;max-width:620px;margin:0 auto;background:#0a0d1a;color:#fff;border-radius:16px;overflow:hidden;border:1px solid #1f2937;">
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#4f6ef7,#7c3aed);padding:28px 32px;text-align:center;">
        <div style="display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.15);border-radius:14px;width:56px;height:56px;font-size:28px;font-weight:900;color:#fff;margin-bottom:10px;">N</div>
        <h1 style="margin:0;font-size:22px;font-weight:800;color:#fff;">NexGen BR Technologies</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">New ${label} Application</p>
      </div>

      <!-- Body -->
      <div style="padding:28px 32px;">
        <div style="background:#111827;border-radius:12px;padding:4px 0;margin-bottom:20px;overflow:hidden;">
          <table style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>
        </div>

        ${resumeBase64 && resumeFileName
          ? `<div style="background:#1f2937;border-radius:10px;padding:14px 16px;margin-bottom:20px;display:flex;align-items:center;gap:12px;">
              <span style="font-size:22px;">📎</span>
              <div>
                <p style="margin:0;font-size:13px;font-weight:600;color:#f3f4f6;">Resume Attached</p>
                <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">${resumeFileName}</p>
              </div>
             </div>`
          : ""}

        <div style="background:linear-gradient(135deg,${accentColor}18,${accentColor}08);border:1px solid ${accentColor}30;border-radius:10px;padding:14px 16px;">
          <p style="margin:0;font-size:13px;color:${accentColor};font-weight:600;">⚡ Action Required</p>
          <p style="margin:6px 0 0;font-size:13px;color:#9ca3af;">Review this application and respond to the candidate within 2–3 business days.</p>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding:20px 32px;border-top:1px solid #1f2937;text-align:center;">
        <p style="margin:0;font-size:12px;color:#4b5563;">NexGen BR Technologies &mdash; info@nexgenbrtechnologies.com</p>
        <p style="margin:4px 0 0;font-size:11px;color:#374151;">Wardha, Nagpur, Maharashtra, India</p>
      </div>
    </div>
  `;

  const name = String(data["name"] ?? "Applicant");
  const email = String(data["email"] ?? smtpUser);

  const attachments = [];
  if (resumeBase64 && resumeFileName) {
    attachments.push({
      filename: resumeFileName,
      content: resumeBase64.split(",")[1] ?? resumeBase64,
      encoding: "base64" as const,
    });
  }

  await transporter.sendMail({
    from: `"NexGen BR Technologies" <${smtpUser}>`,
    to: "info@nexgenbrtechnologies.com",
    replyTo: email,
    subject: `📋 New ${label} Application — ${name}`,
    html,
    attachments,
  });
}

router.post("/hire/trainer", async (req, res) => {
  const parsed = trainerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    return;
  }

  try {
    const { resumeBase64, resumeFileName, ...rest } = parsed.data;
    await sendHireEmail({
      type: "trainer",
      data: rest as unknown as Record<string, unknown>,
      resumeBase64,
      resumeFileName,
    });
    res.status(201).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to process trainer application");
    res.status(500).json({ error: "Failed to submit. Please try again." });
  }
});

router.post("/hire/student", async (req, res) => {
  const parsed = studentSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    return;
  }

  try {
    const { resumeBase64, resumeFileName, ...rest } = parsed.data;
    await sendHireEmail({
      type: "student",
      data: rest as unknown as Record<string, unknown>,
      resumeBase64,
      resumeFileName,
    });
    res.status(201).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to process student application");
    res.status(500).json({ error: "Failed to submit. Please try again." });
  }
});

export default router;
