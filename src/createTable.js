function createTable(numRows, numCols) {
    return new Array(numRows)
    .fill()
    .map((arr) => new Array(numCols).fill(0));
}

export default createTable;