/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1,p2 = l2, prevAddNum = 0, sumDigits = []
  do {
    const value1 = p1 ? p1.val : 0
    const value2 = p2 ? p2.val : 0
    let sum = value1 + value2 + prevAddNum
    prevAddNum = 0
    let currentDigit = 0
    if (sum >= 10) {
      prevAddNum = 1
      currentDigit = sum - 10
    } else {
      currentDigit = sum
    }
    sumDigits.push(currentDigit)

    if (p1 !== null) {
      p1 = p1.next
    }
    if (p2 !== null) {
      p2 = p2.next
    }
  } while (p1 !== null || p2 !== null || prevAddNum === 1)
  let sumDigitsLinkList = sumDigits.reverse().map(item => {
    return {
      val: item,
      next: null
    }
  }).map((item, index, items) => {
    if (index === 0) {
      return item
    }
    item.next = items[index - 1]
    return item
  })
  return sumDigitsLinkList[sumDigitsLinkList.length - 1]
};


// to test
function createList (sumDigits) {
  let sumDigitsLinkList = sumDigits.reverse().map(item => {
    return {
      val: item,
      next: null
    }
  }).map((item, index, items) => {
    if (index === 0) {
      return item
    }
    item.next = items[index - 1]
    return item
  })
  return sumDigitsLinkList[sumDigitsLinkList.length - 1]
}

let a = createList([5]);
let b = createList([5]);
console.log(addTwoNumbers(a, b))
