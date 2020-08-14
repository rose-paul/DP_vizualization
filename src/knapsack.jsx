import React, {useState, useEffect} from 'react';
import CapacityChart from './capacityBar'

const Knapsack = () => {
    const [data, setData] = useState([]);

    const datas = [
        [10, 30, 40, 20],
        [10, 40, 30, 20, 50, 10],
        [60, 30, 40, 20, 30]
    ]
    var i = 0;

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if (i === datas.length) i = 0;
    }


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <CapacityChart width={600} height={400} data={data} />
        </div>
    );
}

export default Knapsack;