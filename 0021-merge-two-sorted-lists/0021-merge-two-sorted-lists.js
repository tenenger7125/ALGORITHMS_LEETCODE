/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let mergeTwoList = null;
    let currentMergeTwoListNode = null;
    let currentList1Node = list1;
    let currentList2Node = list2;
    
    
    while (currentList1Node !== null && currentList2Node !== null) {
        const newNode = new ListNode();
        
        if (currentList1Node.val <= currentList2Node.val) {
            newNode.val = currentList1Node.val;
            currentList1Node = currentList1Node.next;
        } else {
            newNode.val = currentList2Node.val;
            currentList2Node = currentList2Node.next;
        }
        
        if (mergeTwoList === null) currentMergeTwoListNode = mergeTwoList = newNode;
        else currentMergeTwoListNode = currentMergeTwoListNode.next = newNode;

    }
    
    while (currentList1Node !== null) {
        const newNode = new ListNode();
        
        newNode.val = currentList1Node.val;
        currentList1Node = currentList1Node.next;
        
        if (mergeTwoList === null) currentMergeTwoListNode = mergeTwoList = newNode;
        else currentMergeTwoListNode = currentMergeTwoListNode.next = newNode;
    }
    
    while (currentList2Node !== null) {
        const newNode = new ListNode();
        
        newNode.val = currentList2Node.val;
        currentList2Node = currentList2Node.next;
        
        if (mergeTwoList === null) currentMergeTwoListNode = mergeTwoList = newNode;
        else currentMergeTwoListNode = currentMergeTwoListNode.next = newNode;
    }
    
    return mergeTwoList
};