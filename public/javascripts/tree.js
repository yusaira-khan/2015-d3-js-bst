/**
 * Created by yusaira-khan on 14/10/15.
 */

function TreeNode(data, options) {
  if (!options) {
    options = {left: null, right: null, parent: null};

  }
  this.data = data;
  this.left = options.left;
  this.right = options.right;
  this.parent = options.parent;
}

TreeNode.prototype.preOrderTraverse = function (callback) {

  callback(this.data);
  if (this.left) {
    this.left.preOrderTraverse(callback);
  }
  if (this.right) {
    this.right.preOrderTraverse(callback);
  }
};

TreeNode.prototype.inOrderTraverse = function (callback) {
  if (this.left) {
    this.left.inOrderTraverse(callback);
  }
  callback(this.data);
  if (this.right) {
    this.right.inOrderTraverse(callback);
  }
};

TreeNode.prototype.height = function () {
  var h = 0;
  if (!this.left && !this.right) {
    h = 1;
  }
  else if (!this.left) {
    h = this.right.height() + 1;
  } else if (!this.right) {
    h = this.right.height() + 1;
  }
  else {
    h = Math.max(this.right.height(), this.left.height()) + 1;

  }
  this.data.height = h;
  return h;
};

TreeNode.prototype.width = function (pAdj) {
  var w = 0;
  if (pAdj == undefined) {
    pAdj = 0;
  }
  if (this.left) {
    w += this.left.width(pAdj);
  }
  if (this.right) {
    w += this.right.width(pAdj + w);
  }
  if (w === 0) {
    w = 1;
  }
  this.data.width = w;
  this.data.pAdj = pAdj;
  return w;
};
