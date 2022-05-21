import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Action from "./Action";



function CardMovie(props) {
    return (
        <Link to={`/sessoes/${props.id}`}>
            <div className="cardMovie">
                <img src={props.url} alt={props.alt} />
            </div>
        </Link>
    );
}

export default function CardsPlace() {
    //LOGIC
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            console.log(response.data);
            setCards(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    //UI
    return (
        <main>
            <div className="cardsPlace">
                <Action>
                    Selecione o filme
                </Action>
                {cards.map(value => <CardMovie id={value.id} key={value.id} url={value.posterURL} alt={value.overview}></CardMovie>)}
            </div>
        </main>
    );
}