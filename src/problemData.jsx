import React from 'react';

const ProblemData = ({ weights, values, maxCapacity }) => (
  <div className="knapsack-inner--input">
    <h3>Input</h3>
    <p>weights: {weights}</p>
    <p>values: {values}</p>
    <p>capacity: {maxCapacity}</p>
  </div>
);

export default ProblemData