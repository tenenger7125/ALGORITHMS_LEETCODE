/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let currentNode = head;
    let prevNode = null;
    
    while (currentNode !== null) {
        const next = currentNode.next;
        
        if (currentNode.val !== val) prevNode = currentNode;
        else if (prevNode !== null) prevNode.next = next; 
        else head = head.next;
        
        currentNode = next;
    }
    
    return head;
};