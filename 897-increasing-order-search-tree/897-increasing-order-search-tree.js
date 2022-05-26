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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let values = [];
    
    dfs(root);
    function dfs (node) {
        if(node === null) return;
        values.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    values = values.sort((a, b) => a - b);    
    let res = new TreeNode(values[0]);
    let temp = res;
    for (let i = 1; i < values.length; i++) {
        let newNode = new TreeNode(values[i]);
        temp.right = newNode;
        temp = temp.right;
    }
    return res;
    
    
}; 