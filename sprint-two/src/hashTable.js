

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  if (bucket) {
    const tuple = _.find(bucket, (elem) => elem[0] === k);
    if (tuple) {
      tuple[1] = v;
    } else {
      bucket.push([k, v]);
    }
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

HashTable.prototype.clearTable = function() {
  this._storage.each((bucket, index, storage) => {
    storage[index] = [];
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 */


