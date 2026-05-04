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
});

async function sendHireEmail(type: "trainer" | "student", data: Record<string, unknown>) {
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
  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:8px 0;color:#9ca3af;width:140px;text-transform:capitalize;">${k}</td><td style="padding:8px 0;color:#fff;">${v}</td></tr>`)
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0d1a;color:#fff;padding:32px;border-radius:12px;">
      <div style="text-align:center;margin-bottom:24px;">
        <div style="display:inline-block;background:linear-gradient(135deg,#4f6ef7,#7c3aed);border-radius:12px;width:56px;height:56px;line-height:56px;font-size:28px;font-weight:900;color:#fff;margin-bottom:8px;">N</div>
        <h2 style="color:#fff;margin:0;">NexGen BR Technologies</h2>
        <p style="color:${isTrainer ? "#a78bfa" : "#06b6d4"};margin:4px 0 0;">New ${isTrainer ? "Trainer" : "Student/Fresher"} Application</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #1f2937;text-align:center;color:#6b7280;font-size:12px;">
        NexGen BR Technologies &mdash; info@nexgenbrtechnologies.com
      </div>
    </div>
  `;

  const name = String(data.name ?? "Applicant");
  const email = String(data.email ?? smtpUser);

  await transporter.sendMail({
    from: `"NexGen BR Technologies" <${smtpUser}>`,
    to: "info@nexgenbrtechnologies.com",
    replyTo: email,
    subject: `New ${isTrainer ? "Trainer" : "Student"} Application — ${name}`,
    html,
  });
}

router.post("/hire/trainer", async (req, res) => {
  const parsed = trainerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    return;
  }

  try {
    await sendHireEmail("trainer", parsed.data as unknown as Record<string, unknown>);
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
    await sendHireEmail("student", parsed.data as unknown as Record<string, unknown>);
    res.status(201).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to process student application");
    res.status(500).json({ error: "Failed to submit. Please try again." });
  }
});

export default router;
