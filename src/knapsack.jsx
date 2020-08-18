import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';

const Knapsack = ({stepFunc}) => {
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(10);
    const [i, setI] = useState(0)
    const weights = [[2], [3], [6], [7]]
    const values = [[1], [4], [5], [6]]
    const [algoI, setalgoI] = useState(0);
    const [dpTable, setTable] = useState();

    useEffect(() => {
        setTable(stepFunc());
        setMaxCapacity(10)
    }, []);

    // update the data if the idx changes
    useEffect(() => {
        setData(weights[i]);
    }, [i]) 

    // update the table if the algorithm iteration changes
    useEffect(() => {
        setTable(stepFunc());
        if (dpTable && algoI === dpTable[0].length - 2) {
            setalgoI(0)
            changeData();
        }
    }, [algoI])

    // to change idx of current data
    const changeData = () => {
        if (dpTable && i === dpTable.length) {
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
                <button onClick={changeData}>Change Data</button>
                <CapacityChart width={40} height={500} data={data} maxCapacity={maxCapacity} />
                <span>{data[0]}</span>
            </div>
            <DynamicProgrammingTable numRows={5} numCols={10} dpTable={dpTable} />
            <button onClick={() => setalgoI(oldI => oldI+1)}>Next!</button>
        </div>
    );
}

export default Knapsack;