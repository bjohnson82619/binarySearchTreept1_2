// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    if(!this.root){
      this.root = new TreeNode(val)
      return;
    }
    if(val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = new TreeNode(val)

      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if(!currentNode.right){
        currentNode.right = new TreeNode(val)
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val, current = this.root) {
    if(current === null){
      return false;
    } else if (val <= this.root.val) {
        if(val === current.val){
          return true;
        } else {
          this.search(val, current.left)
      }
    } else {
      if(current === null){
        if(val === current.val){
          return true;
        } else {
          this.search(val, current.right)
        }
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
