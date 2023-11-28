import { environments } from "@/environments";
import Image from "next/image";

export default function Thanks() {
    return (
        <section className="vh-100 w-100 container d-flex justify-content-center align-items-center text-black ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4  d-flex justify-content-center">
                    <Image className="img-thanks" width={270} height={370} src="/images/logomarca.svg" alt="logo qro site" />
                </div>
                <div className="col-md-8 mt-md-0 mt-4">
                    <div className="d-flex flex-column">
                        <h1 className="fw-medium display-2 ">Agradecemos por <br /> escolher a QRO SITE!</h1>

                        <span className="mt-5">Seus dados foram armazenados e em breve entraremos em contato! Se você quiser falar com nosso atendimento agora, clique no botão abaixo.</span>
                        <a href={environments.whatsAppLink} target="_blank" className="mt-2 btn btn-main text-white scale fs-3 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5 w-100">
                            <span>Falar com nosso atendimento agora</span>
                        </a>
                    </div>
                </div>
            </div>


            <a href="/" className="mt-2 text-black text-decoration-underline position-absolute bottom-0 start-0 m-4">
                <span>Voltar</span>
            </a>
        </section>
    )
}