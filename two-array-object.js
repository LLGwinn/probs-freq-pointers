/**
 *  Accepts two arrays of varying lengths.
 *  First array consists of keys, second one consists of values. 
 *  Function should return an object created from the keys and values. 
 *  If there are not enough values, the rest of keys should have a value of null. 
 *  If there not enough keys, just ignore the rest of values.
 * 
 */
function twoArrayObject(arr1, arr2) {
    let result = {};
    if (!arr1.length) return result;

    for (let i=0; i<arr1.length; i++) {
        result[arr1[i]] = arr2[i] || null;
    }
    return result;
}
