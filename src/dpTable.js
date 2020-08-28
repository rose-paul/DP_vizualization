import React from "react";


const DynamicProgrammingTable = ({ dpTable, currCoords, currWeight }) => {

  React.useEffect(() => {}, [dpTable, currCoords]);
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
                  className={idx < 5 && jdx < 11 ? getHighlightVal(idx, jdx, currCoords[0], currCoords[1], currWeight) : ""}>{val}</td>
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
      return "blue"
  }
  if (idx === currI && jdx === currJ) {
    return "highlight"
  }
  // last condition, if (currJ - currWeight >= 0)  && idx === currI - 1 && jdx === currJ - currWEight
  if (currJ - currWeight >= 0 && idx === currI - 1 && jdx === currJ - currWeight) {
    return "green"
  }
  return `${idx}-${jdx}`;
}

export default DynamicProgrammingTable;