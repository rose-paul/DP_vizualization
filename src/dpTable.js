import React, { useState, useEffect } from "react";


const DynamicProgrammingTable = ({ numRows, numCols }) => {
    const dpTable = new Array(numRows).fill().map( el => new Array(numCols).fill(0));
    return (
      <table>
        <thead>DP Table</thead>
        <tbody>
          {dpTable[0].map((_, i) => (
            <th>{i}</th>
          ))}
          {dpTable.map((row) => {
            return (
              <tr>
                {row.map((val, idx) => {
                  if (idx === 0) {
                    return <th>{idx}</th>;
                  } else {
                    return <td>{val}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>Done</tfoot>
      </table>
    );
}

export default DynamicProgrammingTable;