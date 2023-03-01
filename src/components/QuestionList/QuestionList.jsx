import React, { useState } from "react";
import Questions from "../../Data/Questions";

const QuestionList = () => {
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
        <div className="flex flex-col items-center gap-4 mx-4 sm:mx-auto  md:w-[50%]  mt-[64px] bg-gray-700 p-[60px] rounded-lg text-gray-200">
          <h3 className="text-xl">Final Results</h3>
          <h3>
            {score} out of {Questions.length} correct - (
            {(score / Questions.length) * 100}%)
          </h3>
          <button
            className="bg-gray-900 border-none text-gray-500 py-4 px-7 w-fit text-center text-[16px] font-bold rounded-lg hover:bg-[#0F1427] hover:text-gray-200"
            onClick={() => restartGame()}
          >
            Restart game
          </button>
        </div>
      ) : (
        <div className="flex flex-col  gap-2 mx-auto w-[80%]   p-[16px]">
          <h2 className="text-gray-200">
            Question: {currentQuestion + 1} out of {Questions.length}
          </h2>
          <h3 className="text-gray-300 text-2xl">
            {Questions[currentQuestion].text}
          </h3>

          <ul className="flex flex-col items-center gap-3 list-none ">
            {Questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="mt-[8px] w-full md:w-[70%] text-center text-gray-500 bg-[#151A30] p-3 border border-gray-700 rounded-full text-[20px] hover:cursor-pointer hover:bg-[#281A39] hover:text-gray-200"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
