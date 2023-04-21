import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreSection from "./ScoreSection";

describe("ScoreSection component", () => {
  test("renders score and total questions", () => {
    const score = 5;
    const questions = [
      { id: 1, question: "Question 1" },
      { id: 2, question: "Question 2" },
      { id: 3, question: "Question 3" },
      { id: 4, question: "Question 4" },
      { id: 5, question: "Question 5" },
    ];

    render(<ScoreSection score={score} questions={questions} />);

    const scoreText = screen.getByText(/You scored 5 out of 5/i);
    expect(scoreText).toBeInTheDocument();
  });
});
