var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

var dfs = function(curr, currentSum, targetSum) {
    if (!curr) {
        return false;
    }

    currentSum += curr.val;
    
    if (curr.left === null && curr.right === null) {
        return currentSum === targetSum;
    }
    
    return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
}