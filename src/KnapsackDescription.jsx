import React from "react";

const KnapsackDescription = () => (
  <div className="knapsack-inner--description">
    <div>
      <p>
        <b>Problem Description</b>
      </p>
      <ul>
        <li>You're given a knapsack with a maximum capacity.</li>
        <li>You're given a list of items with a value and weight.</li>
        <li>
          The task: what is the maximum value you can fit in the knapsack.
        </li>
      </ul>
    </div>
    <div>
      <p>
        <b>Important Base Cases</b>
      </p>
      <ul>
        <li>
          If a knapsack can hold 0 capacity, the max value will always be 0,
          regardless of items. This means column 1 is all 0.
        </li>
        <li>
          If an item weighs and values 0, the max value will always be 0,
          regardless of knapsack capacity. This means row 1 is all 0.
        </li>
      </ul>
    </div>
    <div>
      <p>
        <b>How to Use:</b>
      </p>
      <ul>
        <li>
          Hit "next" to do one iteration.
        </li>
        <li>The current cell is highlighted red.</li>
        <li>The previous maximum value is highlighted blue.</li>
        <li>
          If we "take" the current item (and its associated value), 
          we have space to add the green value as well.
        </li>
        <li>
          The current item is highlighted red in the Input table.
        </li>
      </ul>
    </div>
    <p>Try and spot the pattern! Can you think of a way to optimize space?</p>
  </div>
);

export default KnapsackDescription;