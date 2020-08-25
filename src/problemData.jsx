import React from 'react';

const ProblemData = ({ weights, values, maxCapacity }) => (
  <div className="knapsack-inner--input">
    <h3>Input</h3>
    <p>
      <b>Knapsack Capacity</b> {maxCapacity}
    </p>
    <table>
      <tbody>
        <tr>
          <th>Weights</th>
          {weights.map((weight) => (
            <td>{weight}</td>
          ))}
        </tr>

        <tr>
          <th>Values</th>
          {values.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProblemData