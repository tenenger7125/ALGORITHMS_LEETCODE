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
var deleteDuplicates = function(head) {
    let newListNode = null;
    let newListCurrentNode = null;
    
    while (head !== null) {
        const newNode = new ListNode(head.val);
        
        if (newListNode === null) newListCurrentNode = newListNode = newNode;
        else if (newListCurrentNode.val !== head.val) {
            newListCurrentNode = newListCurrentNode.next = newNode;
        }
            
        head = head.next;
    }
    
    return newListNode;
    
};