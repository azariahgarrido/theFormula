export default function Highscores() {
    const scoreOne = localStorage.getItem('Quiz One');
    const scoreTwo = localStorage.getItem('Quiz Two');
    const scoreThree = localStorage.getItem('Quiz Three');
    const scoreFour = localStorage.getItem('Quiz Four');
    const scoreFive = localStorage.getItem('Quiz Five');
    const YourQuiz = localStorage.getItem('YourQuiz');
    return(
        <div className="highscores">
            <div>Highscores</div>
            <div className="scores">
                <p>Quiz one: {scoreOne}/6</p>
                <p>Quiz two: {scoreTwo}/4</p>
                <p>Quiz Three: {scoreThree}/4</p>
                <p>Quiz Four: {scoreFour}/6</p>
                <p>Quiz Five: {scoreFive}/5</p>
                <p>YourQuiz: {YourQuiz}/2</p>
            </div>
        </div>
    )
};