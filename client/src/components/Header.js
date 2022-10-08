import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    
    const navigateToQuizOne = () => {
        navigate('/QuizOne');
    };
    const navigateToQuizTwo = () => {
        navigate('/QuizTwo');
    };
    const navigateToQuizThree = () => {
        navigate('/QuizThree');
    };

    return(
        <main>
            <div>
                <button className = "home" onClick={navigateToQuizOne}>Quiz One</button>
                <button className = "home" onClick={navigateToQuizTwo}>Quiz Two</button>
                <button className = "home" onClick={navigateToQuizTwo}>Quiz Three</button>
            </div>
            <div>
                <button>Make your own Quiz</button>
            </div>
        </main>
    )
}