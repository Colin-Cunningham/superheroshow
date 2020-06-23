import React, { useState, useEffect } from "react";
import "./quiz.css";
import ironMan from "./IronMan";
import thor from "./Thor";
import QuestionBox from "./ChildComp/QuestionBox";
import Result from "./ChildComp/Result";
import { useParams } from "react-router-dom";

function QuizTemp() {
  useEffect(() => {
    getQuestions();
  }, []);

  //UseState to Set Characters

  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

  function computeAnswer(answer, correctAnswer){
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    setResponses(responses + 1);
  };

  function playAgain(){
    getQuestions();
    setQuestionBank([])
    setScore(0);
    setResponses(0);
  };

  const { movie } = useParams();

  function getQuestions(){
    switch (movie) {
      case "Ironman-2008":
        ironMan().then((question) => {
          setQuestionBank(question);
        });
        break;
      case "Thor-2011":
        thor().then((question) => {
          setQuestionBank(question);
        });
        break;
      default:
        break;
    }
  };

  return (
    <div id="qcont">
      <div id="quiztitle">{movie}</div>

      {questionBank.map(({ question, answers, correct, questionId }) => (
        <QuestionBox
          question={question}
          options={answers}
          key={questionId}
          selected={(answer) => computeAnswer(answer, correct)}
        />
      ))}
      {responses === 4 ? (
        <Result score={score} playAgain={playAgain} />
      ) : null}
    </div>
  );
}


export default QuizTemp