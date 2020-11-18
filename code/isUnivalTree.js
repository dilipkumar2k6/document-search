/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const dfs = node => {
    let isLeftUnival = true;
    if(node.left) {
        isLeftUnival = (node.val === node.left.val) && dfs(node.left);
    }
    let isRightUnival = true;
    if(node.right) {
        isRightUnival = (node.val === node.right.val) && dfs(node.right);

    }
    return isLeftUnival && isRightUnival;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) {
        return true;
    }
    return dfs(root);
};

module.exports = isUnivalTree;