import QuizApp from "./QuizApp";

const questions = [
  {
    question: "Which planet is the closest to the Sun?",
    choices: ["Earth", "Venus", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Which chemical element has the symbol 'O'?",
    choices: ["Osmium", "Oxygen", "Oleum", "Oxide"],
    correctAnswer: "Oxygen",
  },
  {
    question: "In which year did the first man land on the moon?",
    choices: ["1969", "1970", "1968", "1971"],
    correctAnswer: "1969",
  },
  {
    question: "What is the capital city of Spain?",
    choices: ["Barcelona", "Madrid", "Valencia", "Seville"],
    correctAnswer: "Madrid",
  },
];

function App() {
  return <QuizApp questions={questions} />;
}

export default App;
