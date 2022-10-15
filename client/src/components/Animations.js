const handleAnswerOptinClick = (isCorrect) => {
	if (isCorrect) {
		setScore(score + 1);
}
	else (!isCorrect) 
		nextQuestion

const NextQuestion = currentQuestion + 1;
if (nextQuestion < questions.length) {
	setCurrentQuestion(nextQuestion);
} else {
	setShowScore(true);
}




