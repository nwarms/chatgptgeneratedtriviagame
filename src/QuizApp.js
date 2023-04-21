import React, { useState } from "react";
import PropTypes from "prop-types";
import QuestionSection from "./components/QuestionSection";
import AnswerSection from "./components/AnswerSection";
import FeedbackSection from "./components/FeedbackSection";
import NavigationButtons from "./components/NavigationButtons";
import ScoreSection from "./components/ScoreSection";
import "./QuizApp.css"; // Import the CSS file

const QuizApp = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerOptionClick = (questionIndex, answer) => {
    if (!selectedAnswers[questionIndex]) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answer,
      });

      if (answer === questions[questionIndex].correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNextQuestionClick = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowQuestions(false);
    }
  };

  const handlePrevQuestionClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleRestartQuizClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowQuestions(true);
    setSelectedAnswers({});
  };

  return (
    <div className="quiz-app">
      <ScoreSection score={score} questions={questions} />
      {showQuestions ? (
        <>
        <QuestionSection
          currentQuestion={currentQuestion}
          questions={questions}
          data-testid="question-section"
        />
        <AnswerSection
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswers={selectedAnswers}
          handleAnswerOptionClick={handleAnswerOptionClick}
          data-testid="answer-section"
        />
          <FeedbackSection
            selectedAnswers={selectedAnswers}
            currentQuestion={currentQuestion}
            questions={questions}
            data-testid="feedback-section"
          />
          <NavigationButtons
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            handlePrevQuestionClick={handlePrevQuestionClick}
            handleNextQuestionClick={handleNextQuestionClick}
            questions={questions}
            data-testid="navigation-section"
          />
        </>
      ) : (
        <button onClick={handleRestartQuizClick}>Restart Quiz</button>
      )}
    </div>
  );
};

QuizApp.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuizApp;
