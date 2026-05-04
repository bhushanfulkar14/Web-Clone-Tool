import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

async function sendContactEmail(data: z.infer<typeof contactSchema>) {
  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];

  if (!smtpUser || !smtpPass) {
    logger.warn("SMTP not configured — skipping contact email");
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
        <p style="color:#06b6d4;margin:4px 0 0;">New Contact Form Submission</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;color:#9ca3af;width:120px;">Name</td><td style="padding:10px 0;color:#fff;font-weight:600;">${data.name}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Email</td><td style="padding:10px 0;color:#4f6ef7;">${data.email}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;">Subject</td><td style="padding:10px 0;color:#fff;">${data.subject}</td></tr>
        <tr><td style="padding:10px 0;color:#9ca3af;vertical-align:top;">Message</td><td style="padding:10px 0;color:#d1d5db;">${data.message.replace(/\n/g, "<br/>")}</td></tr>
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #1f2937;text-align:center;color:#6b7280;font-size:12px;">
        NexGen BR Technologies &mdash; info@nexgenbrtechnologies.com
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"NexGen BR Technologies" <${smtpUser}>`,
    to: "info@nexgenbrtechnologies.com",
    replyTo: data.email,
    subject: `Contact: ${data.subject} — ${data.name}`,
    html,
  });
}

router.post("/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    return;
  }

  try {
    await sendContactEmail(parsed.data);
    res.status(200).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
