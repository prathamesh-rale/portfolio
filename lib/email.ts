import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Escape HTML to prevent XSS in email template
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Send contact form email using Resend
export async function sendContactEmail(data: EmailData) {
  try {
    const contactEmail = process.env.CONTACT_EMAIL || 'realparth77@gmail.com';

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
        
        <p><strong>From:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
        
        <hr style="border: none;
