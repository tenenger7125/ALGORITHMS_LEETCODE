/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let prevNode = null;
    let total = 1;
    let target;
    
    while (currentNode.next !== null) {
        total++;
        currentNode = currentNode.next;
    }
    
    target = total - n;
    currentNode = head;
    
    while (target !== 0) {
        target--;
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    
    if (!prevNode) {
        head = currentNode.next;
    } else {
        prevNode.next = currentNode.next;
        currentNode.next = null;    
    }
    
    return head;
};
