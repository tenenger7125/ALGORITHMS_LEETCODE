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
var isBalanced = function(root) {
    let answer = true;
    
    function dfs (node) {
        if (!node) return 0;
        
        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);
        
        if (Math.abs(leftDepth - rightDepth) >= 2) answer = false;
        
        return 1 + Math.max(leftDepth, rightDepth)
        
    }
    dfs(root)
    
    return answer;    
};