import React from "react";
import PropTypes from "prop-types";

const FeedbackSection = ({
  feedback,
  selectedAnswers,
  currentQuestion,
  questions,
}) => {
  const getFeedback = () => {
    const answer = selectedAnswers[currentQuestion];
    if (answer) {
      if (answer === questions[currentQuestion].correctAnswer) {
        return "Correct!";
      } else {
        return `Incorrect! The correct answer is ${questions[currentQuestion].correctAnswer}`;
      }
    }
    return "";
  };

  return <div className="feedback-section">{feedback || getFeedback()}</div>;
};

FeedbackSection.propTypes = {
  feedback: PropTypes.string,
  selectedAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(FeedbackSection);
