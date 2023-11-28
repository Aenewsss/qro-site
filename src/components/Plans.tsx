import Image from "next/image";
import Button from "./Button";

const Plans = () => {
    return (
        <section className="mt-5 pt-5 pb-5 container d-flex flex-column gap-5">
            <div className="d-flex gap-5 align-items-center flex-lg-nowrap flex-wrap">
                <Image className="img-fluid mw-400" fill src="/images/basic-plan.svg" alt="Ícone Plano básico" />
                <div className="d-flex flex-column gap-4">
                    <h3 className="fw-bold display-5">Pacote Básico:</h3>
                    <h4 className="opacity-60">Ideal para pequenas empresas e startups que precisam de presença online. Inclui design personalizado e até 5 páginas.</h4>
                </div>
            </div>
            <div className="d-flex gap-5 align-items-center flex-row-reverse flex-lg-nowrap flex-wrap">
                <Image className="img-fluid mw-400" fill src="/images/premium-plan.svg" alt="Ícone Plano Premium" />
                <div className="d-flex flex-column gap-4">
                    <h3 className="fw-bold display-5">Pacote Premium:</h3>
                    <h4 className="opacity-60">Para empresas em crescimento que buscam funcionalidades avançadas. Design exclusivo, até 10 páginas, e integração de recursos específicos.</h4>
                </div>
            </div>
            <div className="d-flex gap-5 align-items-center flex-lg-nowrap flex-wrap">
                <Image className="img-fluid mw-400" fill src="/images/enterprise-plan.svg" alt="Ícone Plano Empresarial" />
                <div className="d-flex flex-column gap-4">
                    <h3 className="fw-bold display-5">Pacote Empresarial:</h3>
                    <h4 className="opacity-60">Solução completa para empresas consolidadas. Design Premium, SEO Avançado, e-commerce e suporte dedicado.</h4>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center ">
                <p className="opacity-60">Clique no botão abaixo para fazer um orçamento</p>
                <Button />
            </div>
        </section>
    );
}

export default Plans;