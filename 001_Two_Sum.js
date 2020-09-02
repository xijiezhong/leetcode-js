/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1.暴力求解，用两次循环查询, 时间复杂度O(n^2),空间复杂度O(n)

var twoSum = function(nums, target) {
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

// 2.排序后，以start，end标注数组首尾元素，求和之后与target比较，
//   如果偏大，则前移end一位，如果偏小，则后移start一位，直至找到与target相等的元素
//   时间复杂度O(nlogn),空间复杂度O(n)
var twoSum = function(nums, target) {
  const indexedNums = nums.map((num, index) => {
    return {
      index,
      num
    }
  })
  const sortedNums = indexedNums.sort((a, b) => a.num - b.num)
  let start = 0, end = sortedNums.length - 1

  do {
    if (sortedNums[start].num + sortedNums[end].num > target) {
      end--
    }
    if (sortedNums[start].num + sortedNums[end].num < target) {
      start++
    }
    if (sortedNums[start].num + sortedNums[end].num === target) {
      return [sortedNums[start].index, sortedNums[end].index]
    }
  } while (start !== end)
};

// 3.hashMap，遍历数组把数组映射进一个hash表，边映射边查询hash表中是否有值符合条件
//   时间复杂度O(n),空间复杂度O(n)
var twoSum = function(nums, target) {
  let hashMap = {}
  for (let i = 0; i <= nums.length - 1; i++) {
    if (hashMap[target - nums[i]] !== undefined) {
      return [hashMap[target-nums[i]], i]
    }
    hashMap[nums[i]] = i
  }
};

