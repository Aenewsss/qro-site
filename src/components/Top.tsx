import Image from "next/image";
import Button from "./Button";

const Top = () => {
    return (
        <section className="mt-5 d-flex justify-content-between gap-5">
            <div className="d-flex justify-content-end w-50 mt-5 pt-2   ">
                <div className="d-flex flex-column gap-3 mt-n1">
                    <h1 className="fw-bold display-3">Você precisa de um<br className="d-lg-block d-none" /> Website para seu<br className="d-lg-block d-none" /> negócio?</h1>
                    <p className="fs-5 text-black-sec opacity-60">Seja qual for o seu ramo de atuação, um website é a vitrine digital que define<br className="d-lg-block d-none" />  a presença online da sua empresa.</p>
                    <div>
                        <Button />
                    </div>
                    <span className="text-black-sec opacity-60">Entendemos a importância de um site para impulsionar o seu negócio.</span>
                </div>
            </div>
            <Image className="w-50 d-md-block d-none" quality={90} fill src="/images/site-topo.png" alt="Imagem Site" />
        </section>
    );
}

export default Top;