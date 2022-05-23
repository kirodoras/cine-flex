import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import "./styles/reset.css";
import "./styles/styles.css";
import Header from "./components/Header";
import CardsPlace from "./components/CardsPlace";
import ChoosePlace from "./components/ChoosePlace";
import SelectPlace from "./components/SelectPlace";
import SuccessPlace from "./components/SuccessPlace";
import ErrorPage from "./components/ErrorPage";

export default function App() {
    //LOGIC
    const [screen, setScreen] = React.useState('');
    //UI
    return (
        <BrowserRouter>
            <Header screen={screen}></Header>
            <Routes>
                <Route path="/" element={<CardsPlace setScreen={setScreen}/>}> </Route>
                <Route path="/sessoes/:idFilme" element={<ChoosePlace setScreen={setScreen}/> }></Route>
                <Route path="/assentos/:idSessao" element={<SelectPlace setScreen={setScreen}/>}></Route>
                <Route path="/success" element={<SuccessPlace setScreen={setScreen}/>}></Route>
                <Route path="*" element={<ErrorPage setScreen={setScreen}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}