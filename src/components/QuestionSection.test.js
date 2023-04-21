import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import QuestionSection from "./QuestionSection";

const sampleQuestions = [
  { question: "What is the capital of France?" },
  { question: "What is the capital of Spain?" },
];

describe("QuestionSection component", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders question count correctly", () => {
    render(<QuestionSection currentQuestion={0} questions={sampleQuestions} />);
    const questionCount = screen.getByTestId("question-count");
    expect(questionCount).toHaveTextContent("Question 1/2");
  });

  test("renders question text correctly", () => {
    render(<QuestionSection currentQuestion={0} questions={sampleQuestions} />);
    const questionText = screen.getByTestId("question-text");
    expect(questionText).toHaveTextContent("What is the capital of France?");

    cleanup();

    render(<QuestionSection currentQuestion={1} questions={sampleQuestions} />);
    const updatedQuestionText = screen.getByTestId("question-text");
    expect(updatedQuestionText).toHaveTextContent("What is the capital of Spain?");
  });

  test("handles invalid currentQuestion", () => {
    render(<QuestionSection currentQuestion={-1} questions={sampleQuestions} />);
    expect(screen.getByText("Invalid question data")).toBeInTheDocument();

    cleanup();

    render(<QuestionSection currentQuestion={2} questions={sampleQuestions} />);
    expect(screen.getByText("Invalid question data")).toBeInTheDocument();
  });

  test("handles invalid questions array", () => {
    render(<QuestionSection currentQuestion={0} questions={null} />);
    expect(screen.getByText("Invalid question data")).toBeInTheDocument();

    cleanup();

    render(<QuestionSection currentQuestion={0} questions={{}} />);
    expect(screen.getByText("Invalid question data")).toBeInTheDocument();
  });

  test("handles invalid question object in questions array", () => {
    const invalidQuestions = [
      { question: "What is the capital of France?" },
      { notAQuestion: "What is the capital of Spain?" },
    ];

    render(<QuestionSection currentQuestion={1} questions={invalidQuestions} />);
    expect(screen.getByText("Invalid question data")).toBeInTheDocument();
  });

  test("handles invalid currentQuestion type", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(<QuestionSection currentQuestion="0" questions={sampleQuestions} />);
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  test("handles invalid questions type", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(<QuestionSection currentQuestion={0} questions="invalid" />);
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
