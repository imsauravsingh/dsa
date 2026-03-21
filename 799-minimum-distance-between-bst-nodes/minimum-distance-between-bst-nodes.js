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

    let data = [];
    let node = root;
    let min = Infinity;
    function traverse(n){
        n.left && traverse(n.left);
        data.push(n.val);
        n.right && traverse(n.right);        
    }

    traverse(node);

    for(let i=1; i<data.length; i++){
        min = Math.min(min, data[i]-data[i-1]);
    }
    
    return min;
};