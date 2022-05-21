import { useParams } from 'react-router-dom';
import Action from "./Action";
import Footer from "./Footer";

export default function ChoosePlace() {
    //LOGIC
    const idFilm = useParams();
	console.log(idFilm);
    //UI
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