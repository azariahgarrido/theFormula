import React, { useState } from 'react';
import Auth from '../utils/auth';

export default function QuizFive() {
	const questions = [
		{
			questionText: 'does Spongebob live Bikini Bottom?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},

		{
			questionText: 'does Spongebob have a pet?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},

		{
			questionText: 'has Spongebob gotten his driver liscena?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},

		{
			questionText: 'does Spongebob have a pet?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},

		{
			questionText: '?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		
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
			localStorage.setItem('Quiz Five', score);
		}
	};

	const checkLogin = () => {
		return (
			<div>
				{Auth.loggedIn() ? (
					<div className='score-section'>
							You scored {score} out of {questions.length}
					</div>
				) : (
					<div>Login to see your score</div>
				)}
			</div>
		);
	}

	return (
		<div className='quizFive'>
			{showScore ? (
				checkLogin()
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
							<button className='Axel-Button' key={Math.random()} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}