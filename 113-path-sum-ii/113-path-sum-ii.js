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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    if (!root) return res;
    
    dfs(root, [], 0);
    return res;
    
    function dfs(node, arr, currentSum) {
        currentSum += node.val;
        arr.push(node.val);
        const temp = [...arr];
        if (node.left === null && node.right === null) {
            if (currentSum === targetSum) {
                res.push(arr);
            }
            return;
        }
        
        if (node.left) dfs(node.left, arr, currentSum);
        arr = temp;
        if (node.right) dfs(node.right, arr, currentSum);
    }
    
};