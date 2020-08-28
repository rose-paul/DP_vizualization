import React from "react";

const KnapsackDescription = () => (
  <div className="knapsack-inner--description">
    <div>
      <p>
        The Knapsack Problem is a classic Dynamic Programming algorithm. The
        problem is as follows:
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
        We can use a table to find the solution. We operate with two base
        cases:
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
          Each time you hit the "next" button, the algorithm will
          do one iteration to fill in the table.
        </p>
        <ul>
          <li>The current cell is highlighted red.</li>
          <li>The previous maximum value is highlighted blue.</li>
          <li>
            If we "take" the current item (and its associated value), the potential added value we can get is
            green.
          </li>
          <li>
            The current item considered is highlighted read in the Input table.
          </li>
        </ul>
    </div>
    <p>Rather than say exactly how it works, see if you can spot the pattern yourself!</p>
  </div>
);

export default KnapsackDescription;