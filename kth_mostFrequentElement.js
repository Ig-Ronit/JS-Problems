// Problem Statement:
// Given a non-empty array of integers, return the k most frequent elements.
// example
//  Input: nums = [1,1,1,2,2,5,], k = 2
//  Output: [1,2];
//  Input: nums =[1,1,1,2,3,3,5,5,5,5], k = 3
//Output: [5,1,3];
//  Problem Recap
// Input: array of integers nums, integer k
// Output: the k most frequent elements.
// Order: By frequency (not by numeric value).

function topKFrequent(nums, k) {

  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(entry => entry[0]);


}

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 2, 2, 2, 23, 3, 3, 3, 3, 34, 4, 4, 4, 4, 5, 5,], 3)); // [2,1,3]
console.log(topKFrequent([1, 1, 1, 2, 3, 3, 5, 5, 5, 5], 3)); // [5,1,3]