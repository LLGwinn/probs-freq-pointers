/**
 *  Given a sorted array of integers and a target average, 
 *  determine if there is a pair of values in the array where 
 *  the average of the pair equals the target average. 
 *  There may be more than one pair that matches the average target.
 */
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === target) return true;
        else if (avg > target) right --;
        else left ++;
    }
    return false;
}
