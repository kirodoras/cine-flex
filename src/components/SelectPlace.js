import { useParams } from 'react-router-dom';
import Action from "./Action";
import Footer from "./Footer";

const seatsNumbers = [
    '01', '02', '03', '04', '05', '06', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '48', '49', '50',];

function Seat(props) {
    return (
        <div className="seat">
            {props.number}
        </div>
    );
}

export default function SelectPlace() {
    //LOGIC
    const {idSessao} = useParams();
    console.log(idSessao);

    //UI
    return (
        <main>
            <div className="selectPlace">
                <Action>
                    Selecione o(s) assento(s)
                </Action>
                <div className="seatsPlace">
                    {seatsNumbers.map((value,index) => <Seat number={value} key={index}></Seat>)}
                </div>
                <div className="selectSubtitles">
                    <div className="subtitle">
                        <div className="subtitleColor green">
                        </div>
                        <div className="subtitleText">
                            Selecionado
                        </div>
                    </div>
                    <div className="subtitle">
                        <div className="subtitleColor normal">
                        </div>
                        <div className="subtitleText">
                            Disponível
                        </div>
                    </div>
                    <div className="subtitle">
                        <div className="subtitleColor yellow">
                        </div>
                        <div className="subtitleText">
                            Indisponível
                        </div>
                    </div>
                </div>
                <div className="formPlace">
                    <form>
                        <label>Nome do comprador:</label>
                        <input type="text" name="firstname" placeholder="Digite seu nome..." />
                        <label>CPF do comprador:</label>
                        <input type="text" name="firstname" placeholder="Digite seu CPF..." />
                        <button type="submit">Reservar assento(s)</button>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        </main>
    );
}