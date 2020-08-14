import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'
import 'babel-polyfill'

var i = 0;
const Knapsack = () => {
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState(10);
    const [i, setI] = useState(0)
    const weights = [[2], [3], [6], [7]]
    const values = [[1], [4], [5], [6]]

    useEffect(() => {
        setMaxCapacity(10)
        changeData();
    }, []);

    useEffect(() => {
        console.log('hi')
        setData(weights[i]);
    }, [i]) 

    const changeData = () => {
        if (i === weights.length - 1) {
            setI(0)
            return;
        }
        setI(i + 1);
    }


    return (
        <div>
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <CapacityChart width={40} height={500} data={data} maxCapacity={maxCapacity} />
            <span>{data[0]}</span>
        </div>
    );
}

export default Knapsack;