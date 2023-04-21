import React, { useMemo } from "react";
import PropTypes from "prop-types";
import AnswerOption from "./AnswerOption";

const AnswerSection = ({
  currentQuestion,
  questions,
  selectedAnswers,
  handleAnswerOptionClick,
}) => {
  const answerOptions = useMemo(() => {
    if (!questions || !questions[currentQuestion]) {
      return <p className="error-message">Error: Invalid question data.</p>;
    }

    return questions[currentQuestion].choices.map((answerOption, index) => {
      const isSelected = selectedAnswers[currentQuestion] === answerOption;
      const isCorrect =
        answerOption === questions[currentQuestion].correctAnswer;
      const isWrong =
        selectedAnswers[currentQuestion] && !isCorrect && isSelected;

      const userAnswered = Boolean(selectedAnswers[currentQuestion]);
      const buttonDisabled = userAnswered && !isSelected && !isCorrect;

      return (
        <AnswerOption
          key={`${currentQuestion}-${index}`}
          answerOption={answerOption}
          isSelected={isSelected}
          isCorrect={userAnswered && isCorrect}
          isWrong={isWrong}
          buttonDisabled={buttonDisabled}
          handleAnswerOptionClick={() =>
            handleAnswerOptionClick(currentQuestion, answerOption)
          }
        />
      );
    });
  }, [currentQuestion, questions, selectedAnswers, handleAnswerOptionClick]);

  return <div className="answer-section">{answerOptions}</div>;
};

AnswerSection.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedAnswers: PropTypes.object.isRequired,
  handleAnswerOptionClick: PropTypes.func.isRequired,
};

export default AnswerSection;
