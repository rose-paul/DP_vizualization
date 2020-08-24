import React from "react";


const DynamicProgrammingTable = ({ numRows, numCols, dpTable, currCoords }) => {
  // const dpTable = new Array(numRows).fill().map( el => new Array(numCols+1).fill(0));
  // sleep 1 at end of each loop

  React.useEffect(() => {}, [dpTable]);

  return dpTable !== undefined ? (
    <div>
      <h3>Items (left), Capacity (top)</h3>
      <table>
        <thead>
          <tr>
            <th className="dummy-header"></th>
            {dpTable[0].map((_, i) => (
              <th className="horizontal-header">{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dpTable.map((row, idx) => {
            return (
              <tr>
                <th className="vertical-header">{idx}</th>
                {row.map((val, jdx) => (
                  <td className="data-point" 
                  className={idx === currCoords[0] && jdx === currCoords[1] ? "highlight" : null}>{val}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <p>updating</p>
  );
};

export default DynamicProgrammingTable;