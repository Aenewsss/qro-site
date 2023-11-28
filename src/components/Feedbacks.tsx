import Button from "./Button";

const Feedbacks = () => {
    return (
        <section className="mt-5 container pt-5" id="feedbacks">
            <h2 className="display-4 text-center">Veja o que nossos clientes estão dizendo</h2>

            <div className="col-md-12 d-flex flex-column align-items-center justify-content-between">
                <div id="carouselId" className="carousel carousel-dark slide d-md-flex d-none" data-bs-ride="true">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="d-flex">
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Conheci a iLuminus há 5 anos, e na época, fomos apresentados por um amigo, fizemos cotações com outras empresas mas nenhuma conseguiu nos passar a confiança que tívemos com eles. Concerteza foi nosso melhor investimento!!!</p>
                                    <h4 className="text-uppercase text-black text-start">- Cláudio Ribeiro</h4>
                                </div>
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Sou cliente da iLuminus desde 16/08/2020, quando contratei o projeto para minha padaria. Sempre fui atendido com muita rapidez e comprometimento com o resultado. Hoje, quase três anos depois, posso afirmar que essa parceria foi a melhor coisa que fiz, por isso recomendo, com muita satisfação, o trabalho dessas pessoas maravilhosas.</p>
                                    <h4 className="text-uppercase text-black text-start">- Rui Bezerra</h4>
                                </div>
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Parabenizo toda a Equipe da iLuminus, por serem sempre extremamente atenciosos e profissionais, não é surpresa que dessa forma nos entregaram realmente o que foi prometido, ficamos tranquilos ao fechar o contrato com uma empresa tão atenciosa. Parabéns pelo Pós Venda. Indico de olhos fechados!</p>
                                    <h4 className="text-uppercase text-black text-start">- Bruno Alves</h4>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="d-flex">
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Mesmo pelo prazo curto que tínhamos devido a construção e a complexidade, a iLuminus conseguiu compreender tudo com muita agilidade e profissionalismo. Sem dúvida indicaria os seus serviços.</p>
                                    <h4 className="text-uppercase text-black text-start">- Dhiogo Souza</h4>
                                </div>
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Empresa comprometida com o resultado e desempenho do sistema, comunicação clara, objetiva e certeira!!</p>
                                    <h4 className="text-uppercase text-black text-start">- Daniel Lemos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="carouselMobile" className="carousel carousel-dark slide d-md-none d-flex" data-bs-ride="true">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Conheci a iLuminus há 5 anos, e na época, fomos apresentados por um amigo, fizemos cotações com outras empresas mas nenhuma conseguiu nos passar a confiança que tívemos com eles. Concerteza foi nosso melhor investimento!!!</p>
                                <h4 className="text-uppercase text-black text-start">- Cláudio Ribeiro</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Sou cliente da iLuminus desde 16/08/2020, quando contratei o projeto para minha padaria. Sempre fui atendido com muita rapidez e comprometimento com o resultado. Hoje, quase três anos depois, posso afirmar que essa parceria foi a melhor coisa que fiz, por isso recomendo, com muita satisfação, o trabalho dessas pessoas maravilhosas.</p>
                                <h4 className="text-uppercase text-black text-start">- Rui Bezerra</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Parabenizo toda a Equipe da iLuminus, por serem sempre extremamente atenciosos e profissionais, não é surpresa que dessa forma nos entregaram realmente o que foi prometido, ficamos tranquilos ao fechar o contrato com uma empresa tão atenciosa. Parabéns pelo Pós Venda. Indico de olhos fechados!</p>
                                <h4 className="text-uppercase text-black text-start">- Bruno Alves</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Mesmo pelo prazo curto que tínhamos devido a construção e a complexidade, a iLuminus conseguiu compreender tudo com muita agilidade e profissionalismo. Sem dúvida indicaria os seus serviços.</p>
                                <h4 className="text-uppercase text-black text-start">- Dhiogo Souza</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Empresa comprometida com o resultado e desempenho do sistema, comunicação clara, objetiva e certeira!!</p>
                                <h4 className="text-uppercase text-black text-start">- Daniel Lemos</h4>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselMobile" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselMobile" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Button />
            </div>
        </section>
    );
}

export default Feedbacks;