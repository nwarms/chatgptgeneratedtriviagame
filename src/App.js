import { useState } from "react";

import QuizApp from "./QuizApp";
import { questionSet1, questionSet2, questionSet3, questionSet4, questionSet5 } from "./QuestionSets";

function App() {
  const [selectedQuestionSet, setSelectedQuestionSet] = useState(questionSet1);
  const switchQuestionSet = () => {
    const questionSets = [questionSet1, questionSet2, questionSet3, questionSet4, questionSet5];
    const randomIndex = Math.floor(Math.random() * questionSets.length);
    setSelectedQuestionSet(questionSets[randomIndex]);
  };

  return <QuizApp questions={selectedQuestionSet} switchQuestionSet={switchQuestionSet} />
}

export default App;
