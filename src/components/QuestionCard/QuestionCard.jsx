import React from "react";

const QuestionCard = ({ optionClicked, option }) => {
  return (
    <div
      className="mt-[8px] w-full md:w-[70%] text-center text-gray-500 bg-[#151A30] p-3 border border-gray-700 rounded-full text-[20px] hover:cursor-pointer hover:bg-[#281A39] hover:text-gray-200"
      key={option.id}
      onClick={() => optionClicked(option.isCorrect)}
    >
      {option.text}
    </div>
  );
};

export default QuestionCard;
