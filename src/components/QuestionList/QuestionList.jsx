import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";

const QuestionList = ({ Questions, optionClicked, currentQuestion }) => {
  return (
    <div className="flex flex-col items-center gap-3 list-none ">
      {Questions[currentQuestion].options.map((option) => {
        return <QuestionCard option={option} optionClicked={optionClicked} />;
      })}
    </div>
  );
};

export default QuestionList;
