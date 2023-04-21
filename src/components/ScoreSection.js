import React from "react";
import PropTypes from "prop-types";

const ScoreSection = ({ score, questions }) => {
  return (
    <div className="score-section">
      You scored {score} out of {questions.length}
    </div>
  );
};

ScoreSection.propTypes = {
  score: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default ScoreSection;