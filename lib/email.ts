import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(data: EmailData) {
  try {
    const contactEmail = process.env.CONTACT_EMAIL || 'realparth77@gmail.com';
    const escapedName = escapeHtml(data.name);
    const escapedEmail = escapeHtml(data.email);
    const escapedSubject = escapeHtml(data.subject);
    const escapedMessage = escapeHtml(data.message);

    const emailHtml = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"><h2>New Contact Form Submission</h2><hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;"><p><strong>From:</strong> ${escapedName}</p><p><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p><p><strong>Subject:</strong> ${escapedSubject}</p><hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;"><div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;"><h3>Message:</h3><p style="white-space: pre-wrap; word-wrap: break-word;">${escapedMessage}</p></div><hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;"><p style="color: #666; font-size: 12px;">This message was sent from your portfolio website contact form.<br>Timestamp: ${new Date().toISOString()}</p></div>`;

    const result = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: data.email,
      subject: `New Portfolio Contact: ${escapedSubject}`,
      html: emailHtml,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      throw new Error(result.error.message);
    }

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}
