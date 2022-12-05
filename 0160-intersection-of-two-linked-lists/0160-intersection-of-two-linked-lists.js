/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointA = headA;
    let pointB = headB;
    let count = 0;
    
    while (pointA !== pointB && count !== 2) {
        if (pointA === headB) count++;
        pointA = pointA ? pointA.next : headB;
        pointB = pointB ? pointB.next : headA;
    }
    return count === 2 ? null : pointA;
};