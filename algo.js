// 1038. Binary Search Tree to Greater Sum Tree



// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.



var bstToGst = function(root) {
    
    let sum = 0

    function helper(node){

        if(!node) return

        helper(node.right)

        sum += node.val
        node.val = sum

        helper(node.left)
    }

    helper(root)

    return root
};

/** var bstToGst = function(root) {
    (function updateNode(root, sum) {
        if (root == null) return sum;
        root.val += updateNode(root.right, sum);
        return updateNode(root.left, root.val);
    })(root, 0);

    return root;
};

var bstToGst = function(root) {
    
    let accumulation = 0;
    
    var helper = function( node ){
        
        if( node != null ){
            
            helper( node.right );
            
            accumulation += node.val;
            node.val = accumulation;
            
            helper( node.left );
        }
        return node;
    }
    // ---------------------------------
    
    return helper(root);
}; */