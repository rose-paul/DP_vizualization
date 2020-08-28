import React from 'react';
import Knapsack from './knapsack';
import knapsackProblem from './knapsackProblem';

const App = () => {

    const problemInput = {
        weights: [[0], [2], [3], [6], [7]],
        values: [[0], [1], [4], [5], [6]],
        capacity: 10
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
        // <InputSelection />
        <Knapsack stepFunc={stepFunc} problemInput={problemInput} />
    )
}

export default App;