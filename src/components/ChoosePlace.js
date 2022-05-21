import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import Action from "./Action";
import Footer from "./Footer";

function CardChoose(props) {
    return (
        <div className="cardChoose">
            <div className="chooseDate">
                {props.weekday} - {props.date}
            </div>
            <div className="chooseButtons">
                {props.schedules.map(value => <Link to={`/assentos/${value.id}`} key={value.id}><button id={value.id} key={value.id}type="button">{value.name}</button></Link>)}
            </div>
        </div>
    );
}

export default function ChoosePlace() {
    //LOGIC
    const {idFilme} = useParams();
    const [sessions, setSessions] = React.useState([]);
    const [movieTitle, setMovieTitle] = React.useState('');
    const [movieUrl, setMovieUrl] = React.useState('');

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            console.log(response.data);
            setSessions(response.data.days);
            setMovieTitle(response.data.title);
            setMovieUrl(response.data.posterURL);
        }).catch((error) => {
            console.log(error)
        });
    }, [idFilme]);

    //UI
    return (
        <main>
            <div className="choosePlace">
                <Action>
                    Selecione o horário
                </Action>
                {sessions.map(value => <CardChoose 
                key={value.id} 
                weekday={value.weekday} 
                date={value.date}     
                schedules={value.showtimes}></CardChoose>)}
                <Footer movieTitle={movieTitle} movieUrl={movieUrl}></Footer>
            </div>
        </main>
    );
}