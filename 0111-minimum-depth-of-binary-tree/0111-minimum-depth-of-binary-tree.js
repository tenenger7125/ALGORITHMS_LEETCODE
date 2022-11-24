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
 * @return {number}
 */
var minDepth = function(root) {
    
    const traverse = (node) => {
        if (!node) return 0;
        
        if (!node.left) return 1 + traverse(node.right);
        if (!node.right) return 1 + traverse(node.left);
        
        return 1 + Math.min(traverse(node.left), traverse(node.right))
    }
    return traverse(root)
};