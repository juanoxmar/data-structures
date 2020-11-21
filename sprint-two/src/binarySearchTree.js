var BinarySearchTree = function(value) {
  const tree = Object.create(binaryTreeMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

const binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  const checkTree = function(tree) {
    if (tree.value === value) {
      return;
    } else if (tree.value < value) {
      if (tree.right) {
        checkTree(tree.right);
      } else {
        tree.right = BinarySearchTree(value);
      }
    } else if (tree.value > value) {
      if (tree.left) {
        checkTree(tree.left);
      } else {
        tree.left = BinarySearchTree(value);
      }
    }
  };

  checkTree(this);
};

binaryTreeMethods.contains = function(value) {
  let check = false;
  const containValue = function(tree) {
    if (tree.value === value) {
      check = true;
    } else if (tree.value < value) {
      if (tree.right) {
        containValue(tree.right);
      }
    } else if (tree.value > value) {
      if (tree.left) {
        containValue(tree.left);
      }
    }
  };

  containValue(this);
  return check;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  const treeCallback = function(tree) {
    cb(tree.value);
    if (tree.left) {
      treeCallback(tree.left);
    }
    if (tree.right) {
      treeCallback(tree.right);
    }
  };

  treeCallback(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log(n))
 * contains: O(log(n))
 * depthFirstLog: O(log(n))
 */
