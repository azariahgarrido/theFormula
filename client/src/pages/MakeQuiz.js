import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MakeQuiz() {
	const navigate = useNavigate();

	const [question, setQuestion] = useState("");
	const [correctAnswer, setcorrectAnswer] = useState("");
	const [inCorrectAnswerA, setinCorrectAnswerA] = useState("");
	const [inCorrectAnswerB, setinCorrectAnswerB] = useState("");
	const [inCorrectAnswerC, setinCorrectAnswerC] = useState("");

	const [questionTwo, setQuestionTwo] = useState("");
	const [correctAnswerTwo, setcorrectAnswerTwo] = useState("");
	const [inCorrectAnswerAtwo, setinCorrectAnswerAtwo] = useState("");
	const [inCorrectAnswerBtwo, setinCorrectAnswerBtwo] = useState("");
	const [inCorrectAnswerCtwo, setinCorrectAnswerCtwo] = useState("");

	const navigateToYourQuiz = () => {
        navigate('/YourQuiz');
    };

	const handleSubmit = () => {
		navigateToYourQuiz();
		localStorage.setItem('question', question);
		localStorage.setItem('correctAnswer', correctAnswer);
		localStorage.setItem('inCorrectAnswerA', inCorrectAnswerA);
		localStorage.setItem('inCorrectAnswerB', inCorrectAnswerB);
		localStorage.setItem('inCorrectAnswerC', inCorrectAnswerC);

		localStorage.setItem('questionTwo', questionTwo);
		localStorage.setItem('correctAnswerTwo', correctAnswerTwo);
		localStorage.setItem('inCorrectAnswerAtwo', inCorrectAnswerAtwo);
		localStorage.setItem('inCorrectAnswerBtwo', inCorrectAnswerBtwo);
		localStorage.setItem('inCorrectAnswerCtwo', inCorrectAnswerCtwo);
	}
  
	return (
		<div>
			<form className='yourQuiz' onSubmit={handleSubmit}>


			<div className='quizOne'>
				<label>Enter a question:
				<input
					type="text" 
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
				/>
				</label>

				<label>Add a correct answer:
				<input
					type="text"
					value={correctAnswer}
					onChange={(e) => setcorrectAnswer(e.target.value)}
				/>
				</label>

				<label>Add an incorrect answer:
				<input
					type="text"
					value={inCorrectAnswerA}
					onChange={(e) => setinCorrectAnswerA(e.target.value)}
				/>
				</label>
				<label>Add an incorrect answer:
				<input
					type="text"
					value={inCorrectAnswerB}
					onChange={(e) => setinCorrectAnswerB(e.target.value)}
				/>
				</label>
				<label>Add an incorrect answer:
				<input
					type="text"
					value={inCorrectAnswerC}
					onChange={(e) => setinCorrectAnswerC(e.target.value)}
				/>
				</label>
			</div>


			<div className='quizTwo'>
				<label>Enter a question:
				<input
					type="text" 
					value={questionTwo}
					onChange={(e) => setQuestionTwo(e.target.value)}
				/>
				</label>

				<label>Add a correct answer:
				<input
					type="text"
					value={correctAnswerTwo}
					onChange={(e) => setcorrectAnswerTwo(e.target.value)}
				/>
				</label>

				<label>Add an incorrect answer:
				<input
					type="text"
					value={inCorrectAnswerAtwo}
					onChange={(e) => setinCorrectAnswerAtwo(e.target.value)}
				/>
				</label>
				<label>Add an incorrect answer:
				<input
					type="text"
					value={inCorrectAnswerBtwo}
					onChange={(e) => setinCorrectAnswerBtwo(e.target.value)}
				/>
				</label>
				<label>Add an incorrect answer:
				<input
					type="text"
					value={inCorrectAnswerCtwo}
					onChange={(e) => setinCorrectAnswerCtwo(e.target.value)}
				/>
				</label>
			</div>
			<input type="submit" />
			</form>
	  	</div>
	)
}