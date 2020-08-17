function knapsackProblem(items, capacity) {
  let table = new Array(items.length + 1)
    .fill()
    .map((arr) => new Array(capacity + 1).fill(0));
  let item = 1;
  let currCapacity = 1;
  function delayedLoop() {
    if (item < table.length && currCapacity < table[0].length) {
      const [currValue, currWeight] = items[item - 1];
      const prevMaxValue = table[item - 1][currCapacity];
      if (currWeight <= currCapacity) {
        // can take the item or leave it
        const potentialValue =
          currValue + table[item - 1][currCapacity - currWeight];
        table[item][currCapacity] = Math.max(potentialValue, prevMaxValue);
      } else {
        // can only leave the item
        table[item][currCapacity] = prevMaxValue;
      }
      currCapacity++;
    } else if (currCapacity >= table[0].length && item < table.length) {
      item++;
      currCapacity = 1;
    } else if (item >= table.length) {
      return table;
    }
    return table;
  }

  return delayedLoop;
}

export default knapsackProblem;
