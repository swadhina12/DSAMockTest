//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
  
    while (l1 || l2) {
      let sum = carry;
  
      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }
  
      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }
  
      carry = Math.floor(sum / 10);
      sum %= 10;
  
      current.next = new ListNode(sum);
      current = current.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummy.next;
  }

  //for example:
  // Example 1
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]

// Example 2
const l3 = new ListNode(0);
const l4 = new ListNode(0);

console.log(addTwoNumbers(l3, l4)); // Output: [0]

// Example 3
const l5 = new ListNode(9);
l5.next = new ListNode(9);
l5.next.next = new ListNode(9);
l5.next.next.next = new ListNode(9);
l5.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next.next = new ListNode(9);

const l6 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);

console.log(addTwoNumbers(l5, l6)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
