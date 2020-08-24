import React from 'react';
import Knapsack from './knapsack';
import knapsackProblem from './knapsackProblem';

const App = () => {
    const [currVisual, setVisual] = React.useState(<Knapsack />);
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
        // <NavBar />
        <Knapsack stepFunc={stepFunc} />
    )
}

export default App;