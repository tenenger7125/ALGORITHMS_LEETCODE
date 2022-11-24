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
        
        let left, right;
        
        if (!node.left) left = right = traverse(node.right);
        else if (!node.right) left = right = traverse(node.left);
        else {
            left = traverse(node.left);
            right = traverse(node.right);
        }
        
        return 1 + Math.min(left, right)
    }
    return traverse(root)
};