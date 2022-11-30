/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visit = [];
    let currentNode = head;
    
    while (!visit.includes(currentNode) && currentNode !== null) {
        visit.push(currentNode)
        currentNode = currentNode.next;
    }
    
    return currentNode !== null
};