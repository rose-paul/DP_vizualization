function knapsackProblem(items, capacity) {

  // creat table
  let table = new Array(items.length + 1)
    .fill()
    .map((arr) => new Array(capacity + 1).fill(0));

  // since the first row and column will be zero regardless, can start at [1,1]
  let item = 0;
  let currCapacity = 0;

  // delayedLoop closes over knapsackProblem scoped vars and runs one iteration each call
  function delayedLoop() {
    // if both item (represented by each row) and currCapacity (represented by column idx) are valid...
    if (item < table.length && currCapacity < table[0].length) { // first row/col are zeroes
      if (item === 0 && currCapacity === 0) {
        currCapacity++;
        return [item, currCapacity, table];

      }
      if (item === 0 || currCapacity === 0) {
        currCapacity++;
        return [item, currCapacity, table];
      }
      // grab the value/weight of current item (-1 because zero-based)
      const [currValue, currWeight] = items[item - 1];
      // grab the prevMax that we could have, which is the same capacity but one fewer item
      const prevMaxValue = table[item - 1][currCapacity];

      if (currWeight <= currCapacity) { // if we can fit this item 
        // can take the item. Potential new value is the current value (take item) + the value from previous item
        // after subtracting weight of current item from knapsack
        const potentialValue =
          currValue + table[item - 1][currCapacity - currWeight];
          // fill in whatever is higher
        table[item][currCapacity] = Math.max(potentialValue, prevMaxValue);
      } else { // can't fit item, just take prev max
        table[item][currCapacity] = prevMaxValue;
      }
      currCapacity++;
    } else if (currCapacity >= table[0].length && item < table.length) { // at the end of a row, move one and start at capacity 1
      item++;
      currCapacity = 1;
    } else if (item >= table.length) { // we've gone past final row, table is filled in, just return
      return [item, currCapacity, table];
    }
    return [item, currCapacity, table];
  }

  return delayedLoop;
}

export default knapsackProblem;
