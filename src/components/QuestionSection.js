import React from "react";
import PropTypes from "prop-types";

const QuestionSection = ({ currentQuestion, questions }) => {
  if (
    !Array.isArray(questions) ||
    typeof currentQuestion !== "number" ||
    currentQuestion < 0 ||
    currentQuestion >= questions.length
  ) {
    return <div className="error">Invalid question data</div>;
  }

  const question = questions[currentQuestion];

  if (!question || typeof question.question !== "string") {
    return <div className="error">Invalid question data</div>;
  }

  return (
    <div className="question-section">
      <div className="question-count" data-testid="question-count">
        <span>Question {currentQuestion + 1}</span>/{questions.length}
      </div>
      <div className="question-text" data-testid="question-text">
        {question.question}
      </div>
    </div>
  );
};

QuestionSection.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuestionSection;
