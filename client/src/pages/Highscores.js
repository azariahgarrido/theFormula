export default function Highscores() {
    const scoreOne = localStorage.getItem('Quiz One');
    const scoreTwo = localStorage.getItem('Quiz Two');
    const scoreThree = localStorage.getItem('Quiz Three');
    const scoreFour = localStorage.getItem('Quiz Four');
    return(
        <div>
            <div>Highscores</div>
            <div className="scores">
                <p>Quiz one: {scoreOne}/6</p>
                <p>Quiz two: {scoreTwo}/4</p>
                <p>Quiz Three: {scoreThree}/4</p>
                <p>Quiz Four: {scoreFour}/6</p>
            </div>
        </div>
    )
};