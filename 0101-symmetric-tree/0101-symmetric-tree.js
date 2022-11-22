/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true;
    
    function traverse(nodeLeft, nodeRight) {
        if (nodeLeft === null && nodeRight === null) return true;
        if (nodeLeft === null || nodeRight === null) return false;
        if (nodeLeft.val !== nodeRight.val) return false;
        
        return traverse(nodeLeft.left, nodeRight.right) && traverse(nodeLeft.right, nodeRight.left)
    }
    
    return traverse(root.left, root.right);
};