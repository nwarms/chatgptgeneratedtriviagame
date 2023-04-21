import React from 'react';
import PropTypes from 'prop-types';

const NavigationButtons = ({
  currentQuestion,
  selectedAnswers,
  handlePrevQuestionClick,
  handleNextQuestionClick,
  handleRestartQuizClick,
  showRestartButton,
}) => {
  return (
    <div className="navigation-buttons">
      {!showRestartButton && (
        <>
          <button
            className="nav-button"
            onClick={handlePrevQuestionClick}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            className="nav-button"
            onClick={handleNextQuestionClick}
            disabled={!selectedAnswers[currentQuestion]}
          >
            Next
          </button>
        </>
      )}
      {showRestartButton && (
        <button className="nav-button" onClick={handleRestartQuizClick}>
          Restart Quiz
        </button>
      )}
    </div>
  );
};

NavigationButtons.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  selectedAnswers: PropTypes.array.isRequired,
  handlePrevQuestionClick: PropTypes.func.isRequired,
  handleNextQuestionClick: PropTypes.func.isRequired,
  handleRestartQuizClick: PropTypes.func.isRequired,
  showRestartButton: PropTypes.bool.isRequired,
};

export default NavigationButtons;
