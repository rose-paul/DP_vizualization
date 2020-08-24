import React from "react";


const DynamicProgrammingTable = ({ numRows, numCols, dpTable, currCoords, currWeight }) => {
  // const dpTable = new Array(numRows).fill().map( el => new Array(numCols+1).fill(0));
  // sleep 1 at end of each loop

  React.useEffect(() => {}, [dpTable, currCoords]);
  console.log(currCoords)
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
                  <td 
                  key={`${idx}-${jdx}`}
                  className={getHighlightVal(idx, jdx, currCoords[0], currCoords[1], currWeight)}>{val}</td>
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

function getHighlightVal(idx, jdx, currI, currJ, currWeight) { // what currently on, what looking for
  if (idx + 1 === currI && jdx === currJ) { // above
    if (jdx < currWeight) {
      return "blue"
    }
  }
  if (idx === currI && jdx === currJ) {
    return "highlight"
  }
  return `${idx}-${jdx}`;
}

export default DynamicProgrammingTable;