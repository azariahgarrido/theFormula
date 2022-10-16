import React, { useState } from 'react';

export default function YourQuiz() {

    const question = localStorage.getItem('question');
    const correctAnswer = localStorage.getItem('correctAnswer');
    const inCorrectAnswerA = localStorage.getItem('inCorrectAnswerA');
    const inCorrectAnswerB = localStorage.getItem('inCorrectAnswerB');
    const inCorrectAnswerC = localStorage.getItem('inCorrectAnswerC');

    const questionTwo = localStorage.getItem('questionTwo');
    const correctAnswerTwo = localStorage.getItem('correctAnswerTwo');
    const inCorrectAnswerAtwo = localStorage.getItem('inCorrectAnswerAtwo');
    const inCorrectAnswerBtwo = localStorage.getItem('inCorrectAnswerBtwo');
    const inCorrectAnswerCtwo = localStorage.getItem('inCorrectAnswerCtwo');

    const questions = [
        {
            questionText: `${question}?`,
            answerOptions: [
                { answerText: `${inCorrectAnswerA}`, isCorrect: false },
                { answerText: `${inCorrectAnswerB}`, isCorrect: false },
                { answerText: `${correctAnswer}`, isCorrect: true },
                { answerText: `${inCorrectAnswerC}`, isCorrect: false },
            ],
        },
        {
            questionText: `${questionTwo}?`,
            answerOptions: [
                { answerText: `${inCorrectAnswerAtwo}`, isCorrect: false },
                { answerText: `${inCorrectAnswerBtwo}`, isCorrect: false },
                { answerText: `${correctAnswerTwo}`, isCorrect: true },
                { answerText: `${inCorrectAnswerCtwo}`, isCorrect: false },
            ],
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            localStorage.setItem('YourQuiz', score);
        }
    };

    return (
        <div className='quizOne'>
            {showScore ? (
                <div className='score-section'>
                You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button key={Math.random()} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}