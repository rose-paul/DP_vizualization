import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'
import DynamicProgrammingTable from './dpTable';

var i = 0;
const Knapsack = () => {
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(10);
    const [i, setI] = useState(0)
    const weights = [[2], [3], [6], [7]]
    const values = [[1], [4], [5], [6]]

    // on mount, set max capacity for this input to be 10
    useEffect(() => {
        setMaxCapacity(10)
        changeData();
    }, []);

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


    return (
        <div className="knapsack-outer">
            <div className="knapsack-inner">
                <button onClick={changeData}>Change Data</button>
                <CapacityChart width={40} height={500} data={data} maxCapacity={maxCapacity} />
                <span>{data[0]}</span>
            </div>
            <DynamicProgrammingTable numRows={5} numCols={10} />
        </div>
    );
}

export default Knapsack;