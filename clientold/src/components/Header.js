import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';


export default function Header() {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    
    const navigateToHome = () => {
        navigate('/');
    };
    const navigateToQuizOne = () => {
        navigate('/QuizOne');
    };
    const navigateToQuizTwo = () => {
        navigate('/QuizTwo');
    };
    const navigateToQuizThree = () => {
        navigate('/QuizThree');
    };
    const navigateToQuizFour = () => {
        navigate('/QuizFour');
    };

    const navigateToMakeQuiz = () => {
        navigate('/MakeQuiz');
    };

    const navigateToScores = () => {
        navigate('/Highscores');
    };

    const checkLogin = () => {
        {Auth.loggedIn() ? navigateToMakeQuiz() : setShowModal(true)};
    };

    return(
        <main>
            <div className='headDiv'>
                {Auth.loggedIn() ? (
                <div>
                    <button onClick={navigateToHome}>Home</button>
                    <button onClick={navigateToScores}>Highscores</button>
                    <button onClick={checkLogin}>Make your own Quiz</button>
                    <button onClick={Auth.logout}>Logout</button>
                </div>
                ) : (
                    <div>
                        <button onClick={navigateToHome}>Home</button>
                        <button onClick={() => setShowModal(true)}>Login/SignUp</button>
                    </div>
                )}
                <div>
                    <button className = "home" onClick={navigateToQuizOne}>Quiz One</button>
                    <button className = "home" onClick={navigateToQuizTwo}>Quiz Two</button>
                    <button className = "home" onClick={navigateToQuizThree}>Quiz Three</button>
                    <button className = "home" onClick={navigateToQuizFour}>Quiz Four</button>
                </div>
            </div>
            {/* set modal data up */}
        <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
            <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
                <Nav variant='pills'>
                <Nav.Item>
                    <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
                </Nav>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Tab.Content>
                <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
            </Tab.Content>
            </Modal.Body>
        </Tab.Container>
        </Modal>
    </main>
    )
}