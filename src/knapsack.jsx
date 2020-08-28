import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';
import createTable from './createTable';
import ProblemData from './problemData'
import KnapsackDescription from './KnapsackDescription';

const Knapsack = ({stepFunc, problemInput}) => { // eventually, take props from user input
    
    const [data, setData] = useState([]); // [weight, value] of current item
    const [dataIndex, setI] = useState(0) // index of given [weight, value] in input

    const [currCoords, setCoords] = useState([0, 0]); // current spot on table to fill
    const [dpTable, setTable] = useState(); // table to render and get capacity data

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


    let currCapacity;
    if (dpTable && isValidPosition(currCoords, dpTable.length, dpTable[0].length)) {
        currCapacity = dpTable[currCoords[0]][currCoords[1] - 1][1];
    } else {
        currCapacity = 0;
    }

    return dpTable && currCoords ? (
      <div className="knapsack-outer">
        <KnapsackDescription />
        <div className="knapsack-inner--datacol">
          <ProblemData
            weights={problemInput.weights}
            values={problemInput.values}
            maxCapacity={problemInput.capacity}
            dataIndex={dataIndex}
          />
          <DynamicProgrammingTable
            dpTable={dpTable}
            currCoords={currCoords}
            currWeight={data[0]}
          />
          <button onClick={takeAlgoStep}>Next!</button>
        </div>
        <div className="knapsack-inner--capacity">
          <span>
            <b>Current Capacity: {currCapacity} / 10</b>
          </span>
          <CapacityChart
            width={40}
            height={500}
            data={[currCapacity]}
            maxCapacity={problemInput.capacity}
          />
        </div>
      </div>
    ) : (
      ""
    );
}

function isValidPosition(coords) {
    let [i, j] = coords;
    return (i > 0 && j > 0 )
}

export default Knapsack;