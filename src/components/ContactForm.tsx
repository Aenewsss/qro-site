'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { IContact } from "@/interfaces"

const ContactForm = () => {

    const router = useRouter()

    const [Contact, setContact] = useState<IContact>({
        name: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
        lastName: ""
    })

    async function handleSubmit(e: any) {
        e.preventDefault()

        const result = await fetch('/api/sendMail', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                Contact
            })
        })
        if (result) router.push(`/obrigado?Contact=${Contact.name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4 d-flex gap-3 flex-md-nowrap flex-wrap">
                <input value={Contact.name} onChange={e => setContact({ ...Contact, name: e.target.value })} required type="text" className="form-control pt-2 pb-2 fs-6 border-0 border-bottom" placeholder="Primeiro Nome" />
                <input value={Contact.lastName} onChange={e => setContact({ ...Contact, lastName: e.target.value })} type="text" className="form-control pt-2 pb-2 fs-6 border-0 border-bottom" placeholder="Último nome" />
            </div>
            <div className="mb-4 d-flex gap-3 flex-md-nowrap flex-wrap">
                <input value={Contact.email} onChange={e => setContact({ ...Contact, email: e.target.value })} required type="email" className="form-control pt-2 pb-2 fs-6 border-0 border-bottom" placeholder="E-mail" />
                <input value={Contact.phone} onChange={e => setContact({ ...Contact, phone: e.target.value })} required type="text" className="form-control pt-2 pb-2 fs-6 border-0 border-bottom" placeholder="Telefone" />
            </div>
            <div className="mb-4 d-flex gap-3 flex-md-nowrap flex-wrap">
                <input value={Contact.subject} onChange={e => setContact({ ...Contact, subject: e.target.value })} required type="text" className="form-control pt-2 pb-2 fs-6 border-0 border-bottom" placeholder="Assunto" />
            </div>
            <div className="mb-4 d-flex gap-3 flex-md-nowrap flex-wrap">
                <textarea value={Contact.message} onChange={e => setContact({ ...Contact, message: e.target.value })} required className="form-control pt-2 pb-2 fs-6 border-0 border-bottom" placeholder="Escreva sua mensagem" ></textarea>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-dark">Enviar mensagem</button>
            </div>
        </form>
    );
}

export default ContactForm;