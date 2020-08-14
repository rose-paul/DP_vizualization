import React from 'react';
import Knapsack from './knapsack';

const App = () => {
    const [currVisual, setVisual] = React.useState(<Knapsack />);

    return (
        // <NavBar />
        <Knapsack />
    )
}

export default App;