import React, { useState } from 'react';

export default function QuizTwo() {
	const questions = [
		{
			questionText: 'What is Spongebobs house?',
			answerOptions: [
				{ answerText: 'Tin Can', isCorrect: false },
				{ answerText: 'A Rock', isCorrect: false },
				{ answerText: 'A Pineapple', isCorrect: true },
				{ answerText: 'A Shell', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Mermaid Mans sidekick?',
			answerOptions: [
				{ answerText: 'Plankton', isCorrect: false },
				{ answerText: 'Spongebob', isCorrect: false },
				{ answerText: 'Barnacle Boy', isCorrect: true },
				{ answerText: 'Larry', isCorrect: false },
			],
		},
		{
			questionText: 'What character doesnt have a nose?',
			answerOptions: [
				{ answerText: 'Patrick', isCorrect: true },
				{ answerText: 'Squidward', isCorrect: false },
				{ answerText: 'Spongebob', isCorrect: false },
				{ answerText: 'Mr.krabs', isCorrect: false },
			],
		},
		{
			questionText: 'Which magazine does Squidward subscribe to?',
			answerOptions: [
				{ answerText: 'Fancy Living Digest', isCorrect: true },
				{ answerText: 'Squid Times', isCorrect: false },
				{ answerText: 'Krabby GQ', isCorrect: false },
				{ answerText: 'The Jazz Room', isCorrect: false },
			],
		},
        {
			questionText: 'Who went to college with Flats the Flounder?',
			answerOptions: [
				{ answerText: 'SpongeBob', isCorrect: false },
				{ answerText: 'Patrick', isCorrect: true },
				{ answerText: 'Mr.Krabs', isCorrect: false },
				{ answerText: 'Plankton', isCorrect: false },
			],
		},
        {
			questionText: 'Who is Karen?',
			answerOptions: [
				{ answerText: 'Planktons Wife', isCorrect: true },
				{ answerText: 'Spongebobs Mom', isCorrect: false },
				{ answerText: 'Squidwards Friend', isCorrect: false },
				{ answerText: 'Patricks Dad ', isCorrect: false },
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
            // saveScore();
		}
	};
	return (
		<div className='quizTwo'>
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