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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    let res = false;
    dfs(root, 0);
    
    function dfs (node, sum) {
        if (res === true) return;
        sum += node.val;
        if (node.left === null && node.right === null) {
            res = (sum === targetSum);
            return;
        } 
        if (node.left) dfs(node.left, sum);
        if (node.right) dfs(node.right, sum);
    }
    return res;
};