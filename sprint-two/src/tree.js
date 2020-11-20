var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var treeContains = false;
  var treeCheck = function(tree) {
    if (tree.value === target) {
      treeContains = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        treeCheck(tree.children[i]);
        if (treeContains) {
          break;
        }
      }
    }
  };
  treeCheck(this);
  return treeContains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
