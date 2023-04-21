/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FeedbackSection from "./FeedbackSection";

describe("FeedbackSection", () => {
  const questions = [
    {
      correctAnswer: "A",
    },
    {
      correctAnswer: "B",
    },
  ];

  test("renders correct feedback when provided", () => {
    render(
      <FeedbackSection
        feedback="Great job!"
        selectedAnswers={[]}
        currentQuestion={0}
        questions={questions}
      />
    );

    expect(screen.getByText("Great job!")).toBeInTheDocument();
  });

  test("renders 'Correct!' when the selected answer is correct", () => {
    const selectedAnswers = ["A"];

    render(
      <FeedbackSection
        selectedAnswers={selectedAnswers}
        currentQuestion={0}
        questions={questions}
      />
    );

    expect(screen.getByText("Correct!")).toBeInTheDocument();
  });

  test("renders 'Incorrect!' message with the correct answer when the selected answer is incorrect", () => {
    const selectedAnswers = ["C"];

    render(
      <FeedbackSection
        selectedAnswers={selectedAnswers}
        currentQuestion={0}
        questions={questions}
      />
    );

    expect(
      screen.getByText("Incorrect! The correct answer is A")
    ).toBeInTheDocument();
  });

  test("renders nothing when there is no answer provided for the current question", () => {
    const selectedAnswers = [];

    const { container } = render(
      <FeedbackSection
        selectedAnswers={selectedAnswers}
        currentQuestion={0}
        questions={questions}
      />
    );

    expect(container.querySelector(".feedback-section").textContent).toBe("");
  });
});
