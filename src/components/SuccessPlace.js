import {useNavigate, useLocation} from 'react-router-dom';
import React from 'react';
import Action from "./Action";

export default function SuccessPlace({setScreen}) {
    //LOGIC
    const navigate = useNavigate();
    const location = useLocation();
    const {seatsSelectsNumbers, name, cpf, movieTitle, hour, date} = location.state;

    React.useEffect(() => {
        setScreen("SuccessPlace");   
    }, [setScreen]);
    //UI
    return (
        <main>
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
                        <div>{movieTitle}</div>
                        <div>{date} {hour}</div>
                    </div>
                    <div className="tickets">
                        <div className="successTitle">
                            Ingressos
                        </div>
                        {seatsSelectsNumbers.map((value,index) => <div key={index}>Assento {value}</div>)}
                    </div>
                    <div className="buyer">
                        <div className="successTitle">
                            Comprador
                        </div>
                        <div>Nome: {name}</div>
                        <div> CPF: {cpf}</div>
                    </div>
                </div>
                <button type="button" onClick={() => navigate("/")}>Voltar pra Home</button>
            </div>
        </main>
    );
}