var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  const check = _.contains(this._storage, item);
  if (!check) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  const index = _.indexOf(this._storage, item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(n)
 * contains: 0(n)
 * remove: 0(n)
 */
