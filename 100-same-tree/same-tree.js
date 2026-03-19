/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const queue = [];
    queue.push(p);
    queue.push(q);

    while(queue.length){
        let leftNode = queue.shift();
        let rightNode = queue.shift();

        if(leftNode === rightNode) continue;
        else if(leftNode == null && rightNode==null) continue
        else if(leftNode == null || rightNode==null) return false;
        else if(leftNode.val !== rightNode.val) return false;


        queue.push(leftNode.left);
        queue.push(rightNode.left);
        queue.push(leftNode.right);
        queue.push(rightNode.right);
    }
    return queue.length === 0 ? true : false;
};

