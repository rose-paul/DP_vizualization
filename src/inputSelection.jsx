import React from "react";
import Knapsack from "./knapsack";
import knapsackProblem from "./knapsackProblem";

const TESTCASES = {
    1: [[
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 7],
    ],
    10],

    2: []
}

const InputSelection = () => {

  const [chosenInput, setInput] = React.useState({
    weights: [[0], [2], [3], [6], [7]],
    values: [[0], [1], [4], [5], [6]],
    capacity: 10,
  })

  const onChooseInput = (e) => {

  }

  const stepFunc = knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 7],
    ],
    10
  );

  return (
      <div>
        <label for="input">Choose a test case:</label>

        <select name="input" id="input">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
  );
};

export default InputSelection;
