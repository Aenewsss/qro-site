import { NextResponse } from "next/server";
import * as sgMail from "@sendgrid/mail"
import { IContact } from "@/interfaces";

export async function POST(request: Request) {
    const { lead }: { lead: IContact } = await request.json()
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!)
    const msg = {
        from: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string,
        templateId: process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID,
        personalizations: [{
            to: [{ email: process.env.NEXT_PUBLIC_SENDGRID_TO_EMAIL as string }],
            dynamicTemplateData: { name: lead.name, lastName: lead.lastName, email: lead.email, phone: lead.phone, subject: lead.subject, message: lead.message }
        }],
    }
    try {
        await sgMail.send(msg as any)

        return NextResponse.json({ message: "Email sent" })
    } catch (error) {
        return NextResponse.json({ message: "Email not sent" })
    }


}