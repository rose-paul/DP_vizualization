function knapsackProblem(items, capacity) {
  const table = new Array(items.length + 1)
    .fill()
    .map( arr => new Array(capacity + 1).fill(0));
  let currMax = 0;
  for (let item = 1; item < table.length; item++) {
    for (let currCapacity = 1; currCapacity < table[0].length; currCapacity++) {
      const [currValue, currWeight] = items[item - 1];
      const prevMaxValue = table[item - 1][currCapacity];
      if (currWeight <= currCapacity) {
        // can take the item or leave it
        const potentialValue =
          currValue + table[item - 1][currCapacity - currWeight];
        table[item][currCapacity] = Math.max(potentialValue, prevMaxValue);
        if (table[item][currCapacity] > currMax) {
          currMax = table[item][currCapacity];
        }
      } else {
        // can only leave the item
        table[item][currCapacity] = prevMaxValue;
      }
    }
  }
  return [currMax, findItems(table, items)];
}

function findItems(table, items) {
  const taken = []; // 3, 1
  let r = table.length - 1,
    c = table[0].length - 1; // 2, 3
  while (table[r][c] !== 0) {
    // 10
    if (table[r][c] !== table[r - 1][c]) {
      // this item was taken
      const toSutract = items[r - 1][1]; // 3
      taken.push(r - 1); // 1
      r--;
      c -= toSutract;
    } else {
      r--;
    }
  }
  return taken;
}

export default knapsackProblem;
