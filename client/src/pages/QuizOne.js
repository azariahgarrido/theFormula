import React, { useState } from 'react';
import Auth from '../utils/auth';

export default function QuizOne() {
	const questions = [
		{
			questionText: 'Who is the main character?',
			answerOptions: [
				{ answerText: 'Patrick', isCorrect: false },
				{ answerText: 'Squidward', isCorrect: false },
				{ answerText: 'Spongebob', isCorrect: true },
				{ answerText: 'Mr. Krabs', isCorrect: false },
			],
		},
		{
			questionText: 'What color is Spongebob?',
			answerOptions: [
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},
		{
			questionText: 'Where does Spongebob work?',
			answerOptions: [
				{ answerText: 'Krusty Krab', isCorrect: true },
				{ answerText: 'Chum Bucket', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Tacobell', isCorrect: false },
			],
		},
		{
			questionText: 'What is Planktons obsession?',
			answerOptions: [
				{ answerText: 'Chum Sticks', isCorrect: false },
				{ answerText: 'Making Money', isCorrect: false },
				{ answerText: 'Krabby Patties', isCorrect: false },
				{ answerText: 'The Secret Formula', isCorrect: true },
			],
		},
		{
			questionText: 'Where does Mr.Krabs keep his money?',
			answerOptions: [
				{ answerText: 'His Matress', isCorrect: true },
				{ answerText: 'The Bank', isCorrect: false },
				{ answerText: 'The Chum Bucket', isCorrect: false },
				{ answerText: 'The Krusty Krab', isCorrect: false },
			],
		},
		{
			questionText: 'What does spongebob do for fun?',
			answerOptions: [
				{ answerText: 'Running', isCorrect: false },
				{ answerText: 'Swimming', isCorrect: false },
				{ answerText: 'Cleans The House', isCorrect: false },
				{ answerText: 'Go Jelly Fishing', isCorrect: true },
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
			localStorage.setItem('Quiz One', score);
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
		<div className='quizOneStyle'>
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
							<button key={Math.random()} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}