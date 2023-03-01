import React from "react";

const Results = ({score,Questions,restartGame}) => {
  return (
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
  );
};

export default Results;
