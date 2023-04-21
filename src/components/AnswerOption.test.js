/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnswerOption from "./AnswerOption";

describe("AnswerOption component", () => {
  const mockHandleAnswerOptionClick = jest.fn();

  test("renders the answer option button with the correct text", () => {
    const { getByRole } = render(
      <AnswerOption
        answerOption="A"
        isSelected={false}
        isCorrect={false}
        isWrong={false}
        buttonDisabled={false}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    const answerButton = getByRole("button", { name: /Answer option: A/i });
    expect(answerButton).toBeInTheDocument();
    expect(answerButton).toHaveTextContent("A");
  });

  test("button click calls the handleAnswerOptionClick function", () => {
    const { getByRole } = render(
      <AnswerOption
        answerOption="A"
        isSelected={false}
        isCorrect={false}
        isWrong={false}
        buttonDisabled={false}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    fireEvent.click(getByRole("button", { name: /Answer option: A/i }));
    expect(mockHandleAnswerOptionClick).toHaveBeenCalledTimes(1);
  });
});

// ... (previous imports and tests)

describe("AnswerOption component - error handling and edge cases", () => {
  const mockHandleAnswerOptionClick = jest.fn();
  test("button should have correct CSS class when isSelected is true", () => {
    const { getByRole } = render(
      <AnswerOption
        answerOption="A"
        isSelected={true}
        isCorrect={false}
        isWrong={false}
        buttonDisabled={false}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    const answerButton = getByRole("button", { name: /Answer option: A/i });
    expect(answerButton).toHaveClass("selected");
  });

  test("button should have correct CSS class when isCorrect and userAnswered are true", () => {
    const { getByRole } = render(
      <AnswerOption
        answerOption="A"
        isSelected={true}
        isCorrect={true}
        isWrong={false}
        buttonDisabled={false}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    const answerButton = getByRole("button", { name: /Answer option: A/i });
    expect(answerButton).toHaveClass("correct");
  });

  test("button should have correct CSS class when isWrong is true", () => {
    const { getByRole } = render(
      <AnswerOption
        answerOption="A"
        isSelected={true}
        isCorrect={false}
        isWrong={true}
        buttonDisabled={false}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    const answerButton = getByRole("button", { name: /Answer option: A/i });
    expect(answerButton).toHaveClass("wrong");
  });

  test("button should be disabled when buttonDisabled is true", () => {
    const { getByRole } = render(
      <AnswerOption
        answerOption="A"
        isSelected={false}
        isCorrect={false}
        isWrong={false}
        buttonDisabled={true}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    const answerButton = getByRole("button", { name: /Answer option: A/i });
    expect(answerButton).toBeDisabled();
  });
});

