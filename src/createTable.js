function createTable(numRows, numCols) {
    let table = new Array(numRows)
    .fill()
    .map((arr) => new Array(numCols).fill([0, 0]));
    return table;
}

export default createTable;