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
var minDiffInBST = function(root) {

    // first i need to convert into order
    // then i will check the gap between previous value
    // difference between nodes should be minimum
    // DFS - Inorder

    let node = root;
    let min = Infinity;
    let pre = null;
    function traverse(n){
        if(!n) return;

        n.left && traverse(n.left);
        if(pre!==null){
            min = Math.min(min, n.val - pre);
        }
        pre = n.val;

        n.right && traverse(n.right);        
    }

    traverse(node);    
    return min;
};