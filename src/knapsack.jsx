import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'

var i = 0;
const Knapsack = () => {
    const [data, setData] = useState([]);
    const [maxCapacity, setMaxCapacity] = useState();
    const datas = [[0], [2], [3], [5], [7.5], [9], [10]]

    useEffect(() => {
        setMaxCapacity(100)
        changeData();
    }, []);

    const changeData = () => {
        if (i === datas.length) i = 0;
        setData(datas[i]);
        i++
    }


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <CapacityChart width={40} height={500} data={data} />
            <span>{data[0]}</span>
        </div>
    );
}

export default Knapsack;