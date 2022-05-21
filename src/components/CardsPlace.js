import Action from "./Action";

function CardMovie(props) {
    return (
        <div className="cardMovie">
            <img src="images.jpeg" alt="cardMovie" />
        </div>
    );
}

export default function CardsPlace() {
    return (
        <main>
            <div className="cardsPlace">
                <Action>
                    Selecione o filme
                </Action>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
                <CardMovie></CardMovie>
            </div>
        </main>
    );
}