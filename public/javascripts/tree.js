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
}

TreeNode.prototype.insert = function (tkey) {

  if (tkey < this.data.tkey) {
    if (this.left == null) {
      this.left = new TreeNode({tkey: tkey}, {parent: this})
    } else {
      this.left.insert(tkey);
    }
  } else {
    if (this.right == null) {
      this.right = new TreeNode({tkey: tkey}, {parent: this})
    } else {
      this.right.insert(tkey);
    }
  }
};
TreeNode.prototype.min = function () {
  if (this.left == null)
    return this;
  else
    return this.left.min()
};
TreeNode.prototype.replaceChild = function (newChild) {
  if (this.parent.left == this) {
    this.parent.left = newChild;
  }
  else if (this.parent.right == this){

  }

};
TreeNode.prototype.delete = function (tkey) {
  if (tkey == this.data.tkey) {
    if (this.left && this.right){
      var min = this.right.min();
    }
  }
}
;