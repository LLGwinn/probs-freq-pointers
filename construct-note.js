/**
 *  Accepts two strings, a message and some letters.
 *  Function should return true if the message can be built with the letters that you are given; 
 *  otherwise, it should return false.
 * 
 *  Assume only lowercase letters and no space or special characters in both message and letters.
 *  */  

function constructNote(msg, letters) {
    if (letters.length === 0) return false;
    function freqCounter(str) {
        let counter = {};
        for (let char of str) {
            counter[char] = counter[char] + 1 || 0;
        }
        return counter;
    }
    const msgFreqCounter = freqCounter(msg);
    const lettersFreqCounter = freqCounter(letters);

    for (key in msgFreqCounter) {
        if (!key in lettersFreqCounter) return false;
        if (msgFreqCounter[key] > lettersFreqCounter[key]) return false;
    }
    return true;
}
