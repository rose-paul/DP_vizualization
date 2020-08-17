import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';
import knapsackProblem from './knapsackProblem';

const Knapsack = () => {
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(10);
    const [i, setI] = useState(0)
    const weights = [[2], [3], [6], [7]]
    const values = [[1], [4], [5], [6]]
    const [dpTable, setTable] = useState();
    
    // on mount, set max capacity for this input to be 10
    useEffect(() => {
        const loop = knapsackProblem(
            [
                [1, 2],
                [4, 3],
                [5, 6],
                [6, 7],
            ],
            10
        )
        let startAlgo = setInterval(setTable(loop()), 1000)
        setMaxCapacity(10)
        changeData();
        return () => {
            clearInterval(startAlgo);
        }
    }, []);

    useEffect(() => {

    }, [dpTable])

    // update the data if the idx changes
    useEffect(() => {
        setData(weights[i]);
    }, [i]) 

    // to change idx of current data
    const changeData = () => {
        if (i === weights.length - 1) {
            setI(0)
            return;
        }
        setI(i + 1);
    }

    // const dpTable = knapsackProblem(
    //   [
    //     [1, 2],
    //     [4, 3],
    //     [5, 6],
    //     [6, 7],
    //   ],
    //   10
    // );


    return (
        <div className="knapsack-outer">
            <div>
                <h3>Input</h3>
                <p>weights: {weights}</p>
                <p>values: {values}</p>
                <p>capacity: {maxCapacity}</p>
            </div>
            <div className="knapsack-inner">
                <button onClick={changeData}>Change Data</button>
                <CapacityChart width={40} height={500} data={data} maxCapacity={maxCapacity} />
                <span>{data[0]}</span>
            </div>
            <DynamicProgrammingTable numRows={5} numCols={10} dpTable={dpTable} />
        </div>
    );
}

export default Knapsack;