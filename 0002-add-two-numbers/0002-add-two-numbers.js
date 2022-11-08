/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let addTwoListNode;
    let currentNode;
    let passCarry = 0;

    while (l1 !== null || l2 !== null) {
        const l1Val = l1 === null ? 0 : l1.val;
        const l2Val = l2 === null ? 0 : l2.val;
        const val = passCarry + (l1Val + l2Val)

        const carry = Math.floor(val / 10);
        const remain = val % 10;
        
        const newNode = new ListNode(remain);

        if (addTwoListNode === undefined) {
            currentNode = addTwoListNode = newNode
        } else {
            currentNode = currentNode.next = newNode
        }

        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
        passCarry = carry;
    }

    if (passCarry) {
        const newNode = new ListNode(passCarry);
        currentNode.next = newNode;
    }

    return addTwoListNode
};