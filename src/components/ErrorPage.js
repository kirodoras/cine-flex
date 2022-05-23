import Action from "./Action";

export default function ErrorPage({setScreen}) {
    setScreen('ErrorPage');
    return (
        <main>
            <Action>
                ERROR - PAGE NOT FOUND
            </Action>
        </main>
    );
}