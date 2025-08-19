import { Resend } from 'resend';
import { EmailTemplate } from '@/src/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { full_name, email, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'Floreria Madison <noreply@floreriamadison.com.ar>',
      to: ['benjaminjofre01@gmail.com'],
      subject: "Nuevo mensaje de Floreria Madison",
      react: EmailTemplate({ full_name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}