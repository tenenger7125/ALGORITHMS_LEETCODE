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
// 토끼와 거북이 알고리즘
var hasCycle = function(head) {
    let rabbit = turtle = head;
    
    while (rabbit && rabbit.next) {
        rabbit = rabbit.next.next;
        turtle = turtle.next;
        
        if (rabbit === turtle) return true
    }
    
    return false
};