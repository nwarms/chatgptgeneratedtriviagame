import React from "react";
import classNames from "classnames";

const AnswerOption = ({
  answerOption,
  isSelected,
  isCorrect,
  isWrong,
  buttonDisabled,
  handleAnswerOptionClick,
}) => (
  <div className="answer-option" key={answerOption}>
    <button
      onClick={handleAnswerOptionClick}
      className={classNames({
        selected: isSelected,
        correct: isCorrect,
        wrong: isWrong,
      })}
      disabled={buttonDisabled}
      aria-label={`Answer option: ${answerOption}`}
    >
      {answerOption}
    </button>
  </div>
);

export default AnswerOption;
