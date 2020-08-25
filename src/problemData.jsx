import React from 'react';

const ProblemData = ({ weights, values, maxCapacity, dataIndex }) => (
  <div className="knapsack-inner--input">
    <h3>Input</h3>
    <p>
      <b>Knapsack Capacity</b> {maxCapacity}
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