import React from "react";


const DynamicProgrammingTable = ({ numRows, numCols }) => {
    const dpTable = new Array(numRows).fill().map( el => new Array(numCols+1).fill(0));
    return (
        <div>
            <h3>Items (left), Capacity (top)</h3>
            <table>
              <thead>
                  <tr>
                      <th></th>
                {dpTable[0].map((_, i) => (
                  <th>{i}</th>
                ))}
                  </tr>
              </thead>
              <tbody>
                {dpTable.map( (row, idx) => {
                  return (
                    <tr>
                      <th>{idx}</th>
                      {
                          row.map(val => <td>{val}</td>)
                      }
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
    );
}

export default DynamicProgrammingTable;