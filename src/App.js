import "./styles/reset.css";
import "./styles/styles.css";
import Header from "./components/Header";
import CardsPlace from "./components/CardsPlace";
import ChoosePlace from "./components/ChoosePlace";
import SelectPlace from "./components/SelectPlace";
import SuccessPlace from "./components/SuccessPlace";

export default function App() {
    return (
        <>
            <Header></Header>
            <SuccessPlace></SuccessPlace>
            <SelectPlace></SelectPlace>
            <ChoosePlace></ChoosePlace>
            <CardsPlace></CardsPlace>
        </>
    );
}