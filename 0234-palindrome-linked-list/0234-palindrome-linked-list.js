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
    const arr = [];
    let currentNode = head;
    let idx = 0;
    
    while(currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    currentNode = head;
    arr.reverse();
    console.log(arr, currentNode)
    while(currentNode) {
        if (arr[idx] !== currentNode.val) return false;
        
        idx++;
        currentNode = currentNode.next;
    }
    
    return true
};