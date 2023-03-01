import { describe, expect, test } from "vitest";
import { render} from "@testing-library/react";
import QuestionCard from "../components/QuestionCard/QuestionCard.jsx";
import QuestionList from "../components/QuestionList/QuestionList.jsx";
import Questions from "../Data/Questions.jsx";

describe("Questions components", () => {
  test("testing if QuestionCard is rendered", () => {
    const option = { id: 0, text: "New York City", isCorrect: false };
    const optionClicked = () => {
      console.log("this is questioncard");
    };

    expect(
      render(<QuestionCard option={option} optionClicked={optionClicked} />)
    ).toMatchSnapshot();
  });

  test("if QuestionList renders correctly", () => {
    const currentQuestion = 1;
    const optionClicked = () => {
      console.log("this is questionlist");
    };
    expect(
      render(
        <QuestionList
          optionClicked={optionClicked}
          Questions={Questions}
          currentQuestion={currentQuestion}
        />
      )
    ).toMatchSnapshot();
  });
});
