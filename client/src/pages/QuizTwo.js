import React, { useState } from 'react';
import Auth from '../utils/auth';

export default function QuizTwo() {
	const questions = [
		{
			questionText: 'Who instrument does Squidward play?',
			answerOptions: [
				{ answerText: 'Flute', isCorrect: false },
				{ answerText: 'Clarinet', isCorrect: false },
				{ answerText: 'Didgeridoo', isCorrect: true },
				{ answerText: 'Saxophone', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of Spongebobs pet snail?',
			answerOptions: [
				{ answerText: 'Bary', isCorrect: false },
				{ answerText: 'Terry', isCorrect: false },
				{ answerText: 'Mary', isCorrect: false },
				{ answerText: 'Gary', isCorrect: true },
			],
		},
		{
			questionText: 'What is the name of the boating school teacher?',
			answerOptions: [
				{ answerText: 'Mrs. Puff', isCorrect: true },
				{ answerText: 'Mrs. Fish', isCorrect: false },
				{ answerText: 'Mrs. Pearl', isCorrect: false },
				{ answerText: 'Mrs. Sandy', isCorrect: false },
			],
		},
		{
			questionText: 'What kind of animal is Sandy Cheeks?',
			answerOptions: [
				{ answerText: 'Rat', isCorrect: false },
				{ answerText: 'Squirrel', isCorrect: false },
				{ answerText: 'Ferret', isCorrect: false },
				{ answerText: 'Bear', isCorrect: true },
			],
		},
		{
			questionText: 'What is Planktons first name?',
			answerOptions: [
				{ answerText: 'Sheldon', isCorrect: true },
				{ answerText: 'Eugene', isCorrect: false },
				{ answerText: 'Brandon', isCorrect: false },
				{ answerText: 'Samuel', isCorrect: false },
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
			questionText: 'According to Spongbob & Patrick, what is funnier that "24"?',
			answerOptions: [
				{ answerText: 'The sounds their chairs make', isCorrect: false },
				{ answerText: 'Dumb old Texas', isCorrect: false },
				{ answerText: '25', isCorrect: true },
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
			localStorage.setItem('Quiz Two', score);
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
		<div className='quizTwo'>
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