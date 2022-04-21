/**
 *  Accepts two strings and checks whether the characters in the first string 
 *  form a subsequence of the characters in the second string. 
 *  In other words, the function should check whether the characters in the first string 
 *  appear somewhere in the second string, without their order changing.
 * 
 */
 function isSubsequence(str1, str2) {
    if (!str2.length || str1.length > str2.length) return false;
    let i = 0;
    let j = 0;
    let result;

    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            result = true;
            i++;
            j++;
        } else {
            result = false;
            j++;
        }
    }
    if (i < str1.length) return false;
    return result;
}
