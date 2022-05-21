import Action from "./Action";
import Footer from "./Footer";

export default function ChoosePlace() {
    return (
        <main className="hidden">
            <div className="choosePlace">
                <Action>
                    Selecione o horário
                </Action>
                <div className="cardChoose">
                    <div className="chooseDate">
                        Quinta-feira - 24/06/2021
                    </div>
                    <div className="chooseButtons">
                        <button type="button">15:00</button>
                        <button type="button">15:00</button>
                        <button type="button">15:00</button>
                    </div>
                </div>
                <div className="cardChoose">
                    <div className="chooseDate">
                        Quinta-feira - 24/06/2021
                    </div>
                    <div className="chooseButtons">
                        <button type="button">15:00</button>
                        <button type="button">15:00</button>
                        <button type="button">15:00</button>
                    </div>
                </div>
                <div className="cardChoose">
                    <div className="chooseDate">
                        Quinta-feira - 24/06/2021
                    </div>
                    <div className="chooseButtons">
                        <button type="button">15:00</button>
                        <button type="button">15:00</button>
                        <button type="button">15:00</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </main>
    );
}