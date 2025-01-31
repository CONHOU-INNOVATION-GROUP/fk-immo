import ContactEmail from "@/components/contact-email";
import { transporter } from "@/lib/email";
import { ContactFormType } from "@/types/site";

import { render } from "@react-email/components";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormType = await request.json();

    const emailHtml = await render(ContactEmail({ data }));

    const MailOptions = {
      from: `"${data.firstName} ${data.lastName}" <${data.email}>`,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message - ${data.firstName}`,
      html: emailHtml,
    };

    await transporter.sendMail(MailOptions);

    return NextResponse.json({
      success: true,
      message:
        "Merci pour votre message, nous vous contacterons dans les plus brefs délais",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur s'est produite et votre message n'a pas été envoyé, veuillez réessayer plus tard",
      },
      { status: 500 }
    );
  }
}
