import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';
import createTable from './createTable';
import ProblemData from './problemData';

const Knapsack = ({stepFunc}) => { // eventually, take props from user input
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(10);
    const [i, setI] = useState(0)
    const weights = [[0], [2], [3], [6], [7]]
    const values = [[0], [1], [4], [5], [6]]
    const [currCoords, setCoords] = useState([0, 0]);
    const [algoI, setalgoI] = useState(0);
    const [dpTable, setTable] = useState();

    useEffect(() => {
        let mockTable = createTable(weights.length+1, maxCapacity+1)
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
            <ProblemData weights={weights} values={values} maxCapacity={maxCapacity} />
            <div className="knapsack-inner--capacity">
                {/* add current bag capacity here */}
                <CapacityChart width={40} height={500} data={[data[0]]} maxCapacity={maxCapacity} />
                <span>currItemWeight: {data[0]}, currItemValue: {data[1]}</span>
            </div>
            <div className="knapsack-inner--steps">
                <DynamicProgrammingTable dpTable={dpTable} currCoords={currCoords} currWeight={data[0]} />
                <button onClick={() => setalgoI(oldI => oldI+1)}>Next!</button>
            </div>
        </div>
    );
}

export default Knapsack;