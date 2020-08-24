import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';
import knapsackProblem from './knapsackProblem';

const Knapsack = ({stepFunc}) => {
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(10);
    const [i, setI] = useState(0)
    const weights = [[0], [2], [3], [6], [7]]
    const values = [[0], [1], [4], [5], [6]]
    const [currCoords, setCoords] = useState([0, 0]);
    const [algoI, setalgoI] = useState(0);
    const [dpTable, setTable] = useState();

    useEffect(() => {
        let mockTable = new Array(weights.length + 1)
          .fill()
          .map((arr) => new Array(maxCapacity + 1).fill(0));
        setTable(mockTable);
        setCoords([0, 0])
        setMaxCapacity(10)
    }, []);

    // update the data if the idx changes
    useEffect(() => {
        setData([weights[i], values[i]]);
    }, [i]) 

    // update the table if the algorithm iteration changes
    useEffect(() => {
        const [i, j, table] = stepFunc();
        setTable(table);
        setCoords([i, j]);
        if (dpTable && currCoords[1] === table[0].length) {
            changeData();
        }
    }, [algoI])

    // to change idx of current data
    const changeData = () => {
        if (i === weights.length - 1) {
            return;
        }
        setI(i + 1);
    }

    return (
        <div className="knapsack-outer">
            <div>
                <h3>Input</h3>
                <p>weights: {weights}</p>
                <p>values: {values}</p>
                <p>capacity: {maxCapacity}</p>
            </div>
            <div className="knapsack-inner">
                <CapacityChart width={40} height={500} data={[data[0]]} maxCapacity={maxCapacity} />
                <span>currItemWeight: {data[0]}, currItemValue: {data[1]}</span>
            </div>
            <DynamicProgrammingTable numRows={5} numCols={10} dpTable={dpTable} currCoords={currCoords} />
            <button onClick={() => setalgoI(oldI => oldI+1)}>Next!</button>
        </div>
    );
}

export default Knapsack;