/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnswerSection from "./AnswerSection";

const mockQuestions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of England?",
    choices: ["London", "Paris", "Berlin"],
    correctAnswer: "London",
  },
];

const mockHandleAnswerOptionClick = jest.fn();

describe("AnswerSection component", () => {
  test("renders the correct number of answer options", () => {
    const { getAllByRole } = render(
      <AnswerSection
        currentQuestion={0}
        questions={mockQuestions}
        selectedAnswers={{}}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    const answerOptions = getAllByRole("button", { name: /^Answer option:/i });
    expect(answerOptions).toHaveLength(3);
  });

  test("renders the answer options with the correct text", () => {
    const { getByRole } = render(
      <AnswerSection
        currentQuestion={0}
        questions={mockQuestions}
        selectedAnswers={{}}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    expect(getByRole("button", { name: /Answer option: Paris/i })).toBeInTheDocument();
    expect(getByRole("button", { name: /Answer option: London/i })).toBeInTheDocument();
    expect(getByRole("button", { name: /Answer option: Berlin/i })).toBeInTheDocument();
  });
});

describe("AnswerSection component - error handling and edge cases", () => {
  test("renders an error message when no questions are provided", () => {
    const { getByText } = render(
      <AnswerSection
        currentQuestion={0}
        questions={[]}
        selectedAnswers={{}}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    expect(getByText("Error: Invalid question data.")).toBeInTheDocument();
  });

  test("renders an error message when currentQuestion is out of bounds", () => {
    const { getByText } = render(
      <AnswerSection
        currentQuestion={2}
        questions={mockQuestions}
        selectedAnswers={{}}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    expect(getByText("Error: Invalid question data.")).toBeInTheDocument();
  });

  test("renders an error message when questions is undefined", () => {
    const { getByText } = render(
      <AnswerSection
        currentQuestion={0}
        questions={undefined}
        selectedAnswers={{}}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    expect(getByText("Error: Invalid question data.")).toBeInTheDocument();
  });

  test("renders an error message when currentQuestion is undefined", () => {
    const { getByText } = render(
      <AnswerSection
        currentQuestion={undefined}
        questions={mockQuestions}
        selectedAnswers={{}}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
      />
    );

    expect(getByText("Error: Invalid question data.")).toBeInTheDocument();
  });
});