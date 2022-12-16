/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let currentNode = head;
    
    function traverse(node) {
        if (!node) return true;
        
        const prevIsSame = traverse(node.next);
        const currentIsSame = currentNode.val === node.val;
        
        currentNode = currentNode.next;
        
        return prevIsSame && currentIsSame
    }
    
    return traverse(currentNode);
};