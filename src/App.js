import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import "./styles/styles.css";
import Header from "./components/Header";
import CardsPlace from "./components/CardsPlace";
import ChoosePlace from "./components/ChoosePlace";
import SelectPlace from "./components/SelectPlace";
import SuccessPlace from "./components/SuccessPlace";

export default function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<CardsPlace />} />
                <Route path="/sessoes/:idFilme" element={<ChoosePlace />} />
                <Route path="/assentos/:idSessao" element={<SelectPlace />} />
                <Route path="/success" element={<SuccessPlace />} />
            </Routes>
        </BrowserRouter>
    );
}