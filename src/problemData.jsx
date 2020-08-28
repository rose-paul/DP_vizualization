import React from 'react';

const ProblemData = ({ weights, values, maxCapacity, dataIndex }) => (
  <div className="knapsack-inner--input">
    <h3>Input</h3>
    <b>Max Knapsack Capacity: {maxCapacity}</b>
    <p>
      <b>Items</b>
    </p>
    <table>
      <tbody>
        <tr>
          <th>Weights</th>
          {weights.map((weight, idx) => (
            <td className={idx === dataIndex ? "highlight" : ""}>{weight}</td>
          ))}
        </tr>

        <tr>
          <th>Values</th>
          {values.map((value, idx) => (
            <td className={idx === dataIndex ? "highlight" : ""}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProblemData