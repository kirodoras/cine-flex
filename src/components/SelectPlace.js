import { useParams } from 'react-router-dom';
import React from 'react';
import axios from "axios";
import Action from "./Action";
import Footer from "./Footer";

function Seat(props) {
    //LOGIC
    //UI
    function IsAvailable() {
        if (props.isAvailable) {
            return (
                <div className="seat">
                    {props.number}
                </div>
            );
        } else {
            return (
                <div className="seat yellow">
                    {props.number}
                </div>
            );
        }
    }
    return (
        IsAvailable()
    );
}

export default function SelectPlace() {
    //LOGIC
    const { idSessao } = useParams();
    console.log(idSessao);
    const [seats, setSeats] = React.useState([]);
    const [movieTitle, setMovieTitle] = React.useState('');
    const [movieUrl, setMovieUrl] = React.useState('');
    const [hour, setHour] = React.useState('');
    const [weekday, setWeekday] = React.useState('');

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            console.log(response.data);
            setSeats(response.data.seats);
            setMovieTitle(response.data.movie.title);
            setMovieUrl(response.data.movie.posterURL);
            setHour(response.data.name);
            setWeekday(response.data.day.weekday);
        }).catch((error) => {
            console.log(error)
        });
    }, [idSessao]);

    //UI
    return (
        <main>
            <div className="selectPlace">
                <Action>
                    Selecione o(s) assento(s)
                </Action>
                <div className="seatsPlace">
                    {seats.map((value) => <Seat number={value.name} key={value.id} isAvailable={value.isAvailable}></Seat>)}
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
                <Footer movieTitle={movieTitle} movieUrl={movieUrl} hour={hour} weekday={weekday}></Footer>
            </div>
        </main>
    );
}