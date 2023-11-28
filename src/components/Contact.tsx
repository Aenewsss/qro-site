import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { environments } from "@/environments";

const Contact = () => {
    return (
        <section className="mt-5 pt-5 pb-5 container d-flex flex-column align-items-center">
            <h2 className="display-4 text-center">Entre em contato conosco</h2>

            <div className="d-flex gap-2 mt-5">
                <div className="bg-main text-white p-4 px-5 rounded ">
                    <h4 className="fs-3 fw-bold">Informações</h4>

                    <ul className="mt-5 pt-4 pb-5 d-flex flex-column gap-4">
                        <li className="d-flex gap-4 align-items-center">
                            <Image width={30} height={30} src="/icons/phone.svg" alt="Ícone Telefone" />
                            <Link href={environments.whatsAppLink} target="_blank">(61) 9 9263-4979</Link>
                        </li>
                        <li className="d-flex gap-4 align-items-center">
                            <Image width={30} height={30} src="/icons/mail.svg" alt="Ícone Email" />
                            <Link href={environments.whatsAppLink} target="_blank">aenamartinelli@gmail.com</Link>
                        </li>
                        <li className="d-flex gap-4 align-items-center">
                            <Image width={30} height={30} src="/icons/location.svg" alt="Ícone Localização" />
                            <span>Brasil</span>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;