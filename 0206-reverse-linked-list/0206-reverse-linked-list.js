/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;
    
    let postNode = head.next;
    let currentNode = head;
    let prevNode = null;
    
    while (postNode !== null) {
        currentNode.next = prevNode;
        
        prevNode = currentNode;
        currentNode = postNode;
        postNode = postNode.next;
    }
    
    currentNode.next = prevNode;
    
    return currentNode;
};