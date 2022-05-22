import { useParams, useNavigate} from 'react-router-dom';
import React from 'react';
import axios from "axios";
import Action from "./Action";
import Footer from "./Footer";

function Seat(props) {
    //LOGIC
    const [seatColor, setSeatColor] = React.useState('');
    const [state, setState] = React.useState(0);

    function SelectSeat() {
        switch (state) {
            case 0:
                props.add();
                setSeatColor('green');
                setState(1);
                break;
            case 1:
                props.remove();
                setSeatColor('normal');
                setState(0);
                break;
            default:
                setSeatColor('normal');
                setState(0);
                break;
        }
    }

    //UI-base logic
    function IsAvailable() {
        if (props.isAvailable) {
            return (
                <div className={`seat ${seatColor}`} onClick={() => SelectSeat()}>
                    {props.number}
                </div>
            );
        } else {
            return (
                <div className="seat yellow" onClick={() => alert('Esse assento não está disponível')}>
                    {props.number}
                </div>
            );
        }
    }
    //UI
    return (
        IsAvailable()
    );
}

export default function SelectPlace({setScreen}) {
    //LOGIC
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [seats, setSeats] = React.useState([]);
    const [seatsSelects, setSeatsSelects] = React.useState([]);
    const [seatsSelectsNumbers, setSeatsSelectsNumbers] = React.useState([]);
    const [movieTitle, setMovieTitle] = React.useState('');
    const [movieUrl, setMovieUrl] = React.useState('');
    const [hour, setHour] = React.useState('');
    const [date, setDate] = React.useState('');
    const [weekday, setWeekday] = React.useState('');
    const [name, setName] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    function addSeat(id, number) {
        setSeatsSelects([...seatsSelects, id]);
        setSeatsSelectsNumbers([...seatsSelectsNumbers, number]);
    }

    function removeSeat(id, number) {
        setSeatsSelects(seatsSelects.filter((value) => value !== id));
        setSeatsSelectsNumbers(seatsSelectsNumbers.filter((value) => value !== number));
    }

    function submitData(event) {
        event.preventDefault();
        if (seatsSelects.length > 0) {
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", 
            {
                ids: seatsSelects,
                name: name,
                cpf: cpf,
            });

            promise.then((response) => {
                navigate("/success", { state: {seatsSelectsNumbers, name, cpf, movieTitle, hour, date}});
                console.log(response);
            }).catch(err => console.log(err));  

        } else {
            alert("Erro, verifique o(s) assento(s)");
        }
    }

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        setScreen("SelectPlace");
        promise.then(response => {
            console.log(response.data);
            setSeats(response.data.seats);
            setMovieTitle(response.data.movie.title);
            setMovieUrl(response.data.movie.posterURL);
            setHour(response.data.name);
            setWeekday(response.data.day.weekday);
            setDate(response.data.day.date);
        }).catch((error) => {
            console.log(error)
        });
    }, [idSessao,setScreen]);

    //UI
    return (
        <main>
            <div className="selectPlace">
                <Action>
                    Selecione o(s) assento(s)
                </Action>
                <div className="seatsPlace">
                    {seats.map((value, index) => <Seat
                        number={value.name}
                        id={value.id}
                        key={value.id}
                        isAvailable={value.isAvailable}
                        add={() => addSeat(value.id, value.name)}
                        remove={() => removeSeat(value.id, value.name)}></Seat>)}
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
                    <form onSubmit={submitData}>
                        <label>Nome do comprador:</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <label>CPF do comprador:</label>
                        <input
                            type="text"
                            placeholder="Digite seu CPF..."
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required />
                            <button className="submit" type="submit">Reservar assento(s)</button>
                    </form>
                </div>
                <Footer movieTitle={movieTitle} movieUrl={movieUrl} hour={hour} weekday={weekday}></Footer>
            </div>
        </main>
    );
}