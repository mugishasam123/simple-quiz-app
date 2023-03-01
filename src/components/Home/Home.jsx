import React, { useState } from "react";
import Questions from "../../Data/Questions";
import QuestionList from "../QuestionList/QuestionList";
import Results from "../Results/Results";

const Home = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className=" flex flex-col gap-4 text-center mt-12 ">
      <h1 className="font-bold text-3xl text-gray-300">USA Quiz 🇺🇸</h1>

      <h2 className="font-semibold text-2xl text-gray-400">Score: {score}</h2>

      {showResults ? (
        <Results
          score={score}
          Questions={Questions}
          restartGame={restartGame}
        />
      ) : (
        <div className="flex flex-col  gap-2 mx-auto w-[80%]   p-[16px]">
          <h2 className="text-gray-200">
            Question: {currentQuestion + 1} out of {Questions.length}
          </h2>
          <h3 className="text-gray-300 text-2xl">
            {Questions[currentQuestion].text}
          </h3>
          <QuestionList
            optionClicked={optionClicked}
            Questions={Questions}
            currentQuestion={currentQuestion}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
