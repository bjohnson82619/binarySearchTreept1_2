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

  search(val) {
   	let currentNode = this.root;

		while (currentNode) {
			if (val > currentNode.val) {
				currentNode = currentNode.right;
			} else if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else {
				return true;
			}
		}
		return false;
  }


  preOrderTraversal(currentNode = this.root) {
      if(currentNode !== null){
        console.log(currentNode.val)

        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
      }
  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode !== null){
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if(currentNode !== null){
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root];

    while (queue.length){
      const currNode = queue.shift();

      console.log(currNode.val)

      if(currNode.left) {
        queue.push(currNode.left)
      }
      if(currNode.right){
        queue.push(currNode.right)
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
   const stack = [this.root];

   while(stack.length){
    const currNode = stack.pop()

    console.log(currNode.val)

    if (currNode.left) {
				stack.push(currNode.left);
			}

			if (currNode.right) {
				stack.push(currNode.right);
			}
   }
}
}

module.exports = { BinarySearchTree, TreeNode };
