import Action from "./Action";

export default function SuccessPlace() {
    return (
        <main className="hidden">
            <div className="successPlace">
                <Action>
                    <div className="success">
                        Pedido feito <br /> com sucesso!
                    </div>
                </Action>
                <div className="successInfo">
                    <div className="film">
                        <div className="successTitle">
                            Filme e sessão
                        </div>
                        <div>Enola Holmes</div>
                        <div>24/06/2021 15:00</div>
                    </div>
                    <div className="tickets">
                        <div className="successTitle">
                            Ingressos
                        </div>
                        <div>Assento 15</div>
                        <div>Assento 16</div>
                    </div>
                    <div className="buyer">
                        <div className="successTitle">
                            Comprador
                        </div>
                        <div>Nome: João da Silva Sauro</div>
                        <div> CPF: 123.456.789-10</div>
                    </div>
                </div>
                <button type="button">Voltar pra Home</button>
            </div>
        </main>
    );
}