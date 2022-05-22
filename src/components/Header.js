import {useNavigate} from 'react-router-dom';

export default function Header({screen}) {
    //LOGIC
    const navigate = useNavigate();
    //UI
    return (
        <header>
            <h1>
                CINEFLEX
            </h1>
            {screen !== 'CardsPlace' ?<div className="iconBack" onClick={()=> navigate(-1)}>&lt;</div>: null}
        </header>
    );
}