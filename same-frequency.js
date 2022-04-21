/**
 *  Given two positive integers, find out if the two numbers have the same frequency of digits.
 */
function sameFrequency(int1, int2) {
    const str1 = int1.toString();
    const str2 = int2. toString();

    if (str1.length !== str2.length) return false;

    function freqCounter(str) {
        let counter = {};
        for (let char of str) {
            counter[char] = counter[char] + 1 || 0;
        }
        return counter;
    }

    const str1Counter = freqCounter(str1);
    const str2Counter = freqCounter(str2);

    for (key in str1Counter) {
        if (str1Counter[key] !== str2Counter[key]) return false;
    }

    return true;
}
