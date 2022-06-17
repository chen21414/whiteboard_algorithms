//Average: O(LogN) | O(LogN)
//Worst: O(n) | O(n)
//recursive method#1
function findClosestValueInBst(tree, target) {
    return helperToFindClosestValue(tree, target, tree.value)//BST, target, closest value (closet can be null)
  }
  
  
  function helperToFindClosestValue(tree, target, closest) {
    if(tree === null) return closest;//base case, reached the leaf
    if(Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }//compute abs value of difference bw closest node and target node

    if (target < tree.value) {
        return helperToFindClosestValue(tree.left, target, closest);
    } else if (target > tree.value) {
        return helperToFindClosestValue(tree.right, target, closest);
    } else {
        return closest; //found exact value
    }
  }

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;





//Average: O(LogN) | O(1) //O(1) because didn't use additional memory
//Worst: O(n) | O(1)
//iterative method
function findClosestValueInBst(tree, target) {
    return helperToFindClosestValue(tree, target, tree.value)
  }
  
  
  function helperToFindClosestValue(tree, target, closest) {
    let currentNode = tree;//a variable that points to the current node we're exploring
  
    while (currentNode !== null) {
        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }//compute abs value of difference bw closest node and target node
    
        if (target < currentNode.value) {
            currentNode = currentNode.left
        } else if (target > currentNode.value) {
            currentNode = currentNode.right
        } else {
            break;
        }
    }
    return closest;
  }

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
