export default function Footer(props) {
    return (
        <footer>
            <div className="movieMiniCard">
                <img src={props.movieUrl} alt="cadrfooterMovie" />
            </div>
            <div className="movieInfo">
                <div className="movieTitle">
                    {props.movieTitle}
                </div>
                <div className="movieDate">
                    {props.weekday ? `${props.weekday} - ${props.hour}` : null}
                </div>
            </div>
        </footer>
    );
}