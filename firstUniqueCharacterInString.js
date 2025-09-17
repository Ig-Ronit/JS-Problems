//  First Unique Character in a String

// Problem:
// Given a string s, find the first non-repeating character and return its index.
// If it does not exist, return -1.

// Example:
// Input: "leetcode" → Output: 0
// Input: "loveleetcode" → Output: 2

function firstUniqChar(s) {
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;

  }
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }
}
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("leetcode")); // Output: 0