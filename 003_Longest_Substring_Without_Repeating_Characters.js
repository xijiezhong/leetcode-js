/**
 * @param {string} s
 * @return {number}
 */

//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



// 暴力解法
var lengthOfLongestSubstring = function(s) {
  const letterArr = s.split('')
  const len = letterArr.length
  let result = {}
  let resultLen = 0
  let currentLen = 0
  if (len === 0) {
    return 0
  }
  for (let i = 0; i <= len - resultLen - 1; i++) {
    for (let j = i; j <= len - 1; j++) {
      const letter = letterArr[j]
      if (!result[letter]) {
        result[letter] = true
        currentLen++
      } else {
        break
      }
    }
    if (currentLen > resultLen) {
      resultLen = currentLen
    }
    result = {}
    currentLen = 0
  }
  return resultLen
};

var lengthOfLongestSubstring = function(s) {

};
