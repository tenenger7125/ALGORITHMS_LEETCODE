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
var maxDepth = function(root) {
    if (root === null) return 0;
    
    let depth = 1;
    
    function DFS(level, leftNode, rightNode) {
        if (leftNode === null && rightNode === null) depth = Math.max(depth, level);
        if (leftNode) DFS(level+1, leftNode.left, leftNode.right);
        if (rightNode) DFS(level+1, rightNode.left, rightNode.right);
    }
    DFS(depth, root.left, root.right)
    
    return depth
};