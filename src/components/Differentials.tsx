import Image from "next/image";
import Button from "./Button";

const Differentials = () => {
    return (
        <section className="mt-5 pb-5">
            <h2 className="display-4 text-center">Por que escolher a QROSITE?</h2>
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="border border-secondary rounded p-3 d-flex flex-column justify-content-center gap-3 differentials-card">
                            <div className="d-flex gap-3 align-items-center">
                                <Image src="/icons/responsive-design.svg" width={60} height={60} alt="ícone design responsivo" />
                                <h3 className="mb-0">Expertise em Design Responsivo</h3>
                            </div>
                            <p className="fs-5 opacity-60 mb-0">Garantimos uma experiência de usuário excepcional em todos os dispositivos, do desktop ao smarthphone.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border border-secondary rounded p-3 d-flex flex-column justify-content-center gap-3 differentials-card">
                            <div className="d-flex gap-3 align-items-center">
                                <Image src="/icons/customization.svg" width={60} height={60} alt="ícone" />
                                <h3 className="mb-0">Personalização Total</h3>
                            </div>
                            <p className="fs-5 opacity-60 mb-0">Valorizamos a singularidade do seu negócio. Cada Website que cruamos é feito sob medida.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border border-secondary rounded p-3 d-flex flex-column justify-content-center gap-3 differentials-card">
                            <div className="d-flex gap-3 align-items-center">
                                <Image src="/icons/support.svg" width={60} height={60} alt="ícone" />
                                <h3 className="mb-0">Suporte Contínuo</h3>
                            </div>
                            <p className="fs-5 opacity-60 mb-0">Oferecemos suporte contínuo para garantir que seu site funcione sem problemas e esteja sempre atualizado.</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center mt-5">
                    <p className="opacity-60">Clique no botão abaixo para fazer um orçamento</p>
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Differentials;