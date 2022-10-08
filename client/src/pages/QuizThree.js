import React, { useState } from 'react';

export default function QuizThree() {
	const questions = [
		{
			questionText: 'When did Spongebob premire?',
			answerOptions: [
				{ answerText: 'July 17th, 1999', isCorrect: true },
				{ answerText: 'June 20th, 2000', isCorrect: false },
				{ answerText: 'Febuary 20th, 1998', isCorrect: false },
				{ answerText: 'October 16th, 1999', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the voice actor for Spongebob?',
			answerOptions: [
				{ answerText: 'Clancy Brown', isCorrect: false },
				{ answerText: 'YRodger Bumpass', isCorrect: false },
				{ answerText: 'Bill Fagerbakke', isCorrect: false },
				{ answerText: 'Tom Kenny', isCorrect: true },
			],
		},
		{
			questionText: 'How many seasons of Spongebob are there currently?',
			answerOptions: [
				{ answerText: '12', isCorrect: false },
				{ answerText: '13', isCorrect: true },
				{ answerText: '15', isCorrect: false },
				{ answerText: '19', isCorrect: false },
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
		}
	};
	return (
		<div className='quizThree'>
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