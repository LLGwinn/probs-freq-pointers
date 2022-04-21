/**
 *  Given an array of integers, and a number, find the number of pairs of integers in the array 
 *  whose sum is equal to the second parameter. Assume that there will be no duplicate values 
 *  in the array.
 */
function countPairs(arr, num) {
    if (!arr.length) return 0;
    let counter = 0;
    let numSet = new Set(arr);

    for (let item of numSet) {
        numSet.delete(item);
        if (numSet.has(num - item)) {
            counter++;
            numSet.delete(num - item);
        }
    }
    return counter;
}
