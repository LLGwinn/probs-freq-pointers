/**
 *  Accepts an array of non-zero integers. 
 *  Separate positive integers to the left and negative integers to the right. 
 *  Positive numbers and negative numbers need not be in sorted order. 
 *  Problem should be done in place (in other words, do not build a copy of the input array).
 * 
 */
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        if (arr[left] < 0) {
            if (arr[right] > 0) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
            }
            right --;
        }
        else left++
    }
    return arr;
}
