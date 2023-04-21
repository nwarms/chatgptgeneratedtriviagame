/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationButtons from './NavigationButtons';

describe('NavigationButtons component', () => {
  const defaultProps = {
    currentQuestion: 0,
    selectedAnswers: [null, null, null],
    handlePrevQuestionClick: jest.fn(),
    handleNextQuestionClick: jest.fn(),
    handleRestartQuizClick: jest.fn(),
    showRestartButton: false,
  };

  test('renders Previous and Next buttons when showRestartButton is false', () => {
    const { getByText, queryByText } = render(<NavigationButtons {...defaultProps} />);
    expect(getByText('Previous')).toBeInTheDocument();
    expect(getByText('Next')).toBeInTheDocument();
    expect(queryByText('Restart Quiz')).not.toBeInTheDocument();
  });

  test('renders Restart Quiz button when showRestartButton is true', () => {
    const { getByText, queryByText } = render(<NavigationButtons {...defaultProps} showRestartButton />);
    expect(queryByText('Previous')).not.toBeInTheDocument();
    expect(queryByText('Next')).not.toBeInTheDocument();
    expect(getByText('Restart Quiz')).toBeInTheDocument();
  });

  test('disables Previous button when currentQuestion is 0', () => {
    const { getByText } = render(<NavigationButtons {...defaultProps} />);
    expect(getByText('Previous')).toBeDisabled();
  });

  test('disables Next button when there is no selected answer for the current question', () => {
    const { getByText } = render(<NavigationButtons {...defaultProps} />);
    expect(getByText('Next')).toBeDisabled();
  });

  test('calls handlePrevQuestionClick when Previous button is clicked', () => {
    const { getByText } = render(<NavigationButtons {...defaultProps} currentQuestion={1} />);
    fireEvent.click(getByText('Previous'));
    expect(defaultProps.handlePrevQuestionClick).toHaveBeenCalled();
  });

  test('calls handleNextQuestionClick when Next button is clicked', () => {
    const { getByText } = render(
      <NavigationButtons {...defaultProps} currentQuestion={1} selectedAnswers={[null, 'selectedAnswer', null]} />,
    );
    fireEvent.click(getByText('Next'));
    expect(defaultProps.handleNextQuestionClick).toHaveBeenCalled();
  });

  test('calls handleRestartQuizClick when Restart Quiz button is clicked', () => {
    const { getByText } = render(<NavigationButtons {...defaultProps} showRestartButton />);
    fireEvent.click(getByText('Restart Quiz'));
    expect(defaultProps.handleRestartQuizClick).toHaveBeenCalled();
  });
});
