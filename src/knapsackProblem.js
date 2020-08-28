import createTable from "./createTable";

function knapsackProblem(items, capacity) {

  let table = createTable(items.length+1, capacity+1);
  let item = 0;
  let currCapacity = 0;

  // delayedLoop closes over knapsackProblem scoped vars and runs one iteration each call
  function delayedLoop() {
    // return what already have at end
    if (item === table.length - 1 && currCapacity === table[0].length) {
      return [item, currCapacity, table];
    }
    // if both item (row idx) and currCapacity (column idx) are valid...
    if (item < table.length && currCapacity < table[0].length) { 
      // first row is 0 items, first col is 0 capacity => all 0
      if (item === 0 || currCapacity === 0) {
        currCapacity++;
        return [item, currCapacity, table];
      }

      // grab the value/weight of current item (-1 because zero-based)
      const [currValue, currWeight] = items[item - 1];
      // grab the prevMax that we could have, which is the same capacity but one fewer item
      const prevMaxValue = table[item - 1][currCapacity][0];
      const prevCapacity = table[item - 1][currCapacity][1];

      if (currWeight <= currCapacity) { // if we can fit this item 
        // can take the item. Potential new value is the current value (take item) + the value from previous item
        // after subtracting weight of current item from knapsack
        const potentialValue =
          currValue + table[item - 1][currCapacity - currWeight][0];
        const potentialCapacity =
          currWeight + table[item - 1][currCapacity - currWeight][1];
          // max value is what is higher
          if (potentialValue > prevMaxValue) {;
            table[item][currCapacity] = [potentialValue, potentialCapacity]
          } else {
            table[item][currCapacity] = [prevMaxValue, prevCapacity];
          }
      } else { // can't fit item, just take prev max
        table[item][currCapacity] = [prevMaxValue, prevCapacity];
      }
      currCapacity++; 
    } else if (currCapacity >= table[0].length && item < table.length) { // at the end of a row, go to next item and start at capacity 1
      item++;
      currCapacity = 1;
    } 
    return [item, currCapacity, table];
  }

  return delayedLoop;
}

export default knapsackProblem;
