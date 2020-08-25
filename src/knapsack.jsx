import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';
import createTable from './createTable';
import ProblemData from './problemData'

const Knapsack = ({stepFunc, problemInput}) => { // eventually, take props from user input
    
    const [data, setData] = useState([]); // [weight, value] of current item
    const [dataIndex, setI] = useState(0) // index of given [weight, value] in input

    const [currCoords, setCoords] = useState([0, 0]); // current spot on table to fill
    const [dpTable, setTable] = useState(); // table to render

    useEffect(() => {
        // mock table, calling stepFunc prop here will start at wrong coord
        let mockTable = createTable(problemInput.weights.length, problemInput.capacity+1)
        setTable(mockTable);
        setCoords([0, 0])
    }, []);

    useEffect(() => {
        // update the data if the dataIndex changes (when move down a row)
        setData([problemInput.weights[dataIndex], problemInput.values[dataIndex]]);
    }, [dataIndex]) 


    // click handler for 'next' button, updates table values/capacity
    const takeAlgoStep = () => {
        const [i, j, table] = stepFunc();
        setTable(table);
        setCoords([i, j]);
        if (dpTable && currCoords[1] === table[0].length) {
            changeData();
        }
    }

    // to change idx of current data
    const changeData = () => {
        if (dataIndex === problemInput.weights.length - 1) {
            return;
        }
        setI(dataIndex + 1);
    }

    return (
        <div className="knapsack-outer">
            <ProblemData weights={problemInput.weights} values={problemInput.values} maxCapacity={problemInput.capacity} />
            <div className="knapsack-inner--capacity">
                {/* add current bag capacity here */}
                <CapacityChart width={40} height={500} data={[data[0]]} maxCapacity={problemInput.capacity} />
                <span>currItemWeight: {data[0]}, currItemValue: {data[1]}</span>
            </div>
            <div className="knapsack-inner--steps">
                <DynamicProgrammingTable dpTable={dpTable} currCoords={currCoords} currWeight={data[0]} />
                <button onClick={takeAlgoStep}>Next!</button>
            </div>
        </div>
    );
}

export default Knapsack;