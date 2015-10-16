/**
 * Created by yusaira-khan on 15/10/15.
 */

//TODO: use inheritance
TreeNode.prototype.insert = function (tkey) {

  if (tkey < this.data.tkey) {
    if (this.left == null) {
      this.left = new TreeNode({tkey: tkey}, {parent: this, left: null, right: null})
    } else {
      this.left.insert(tkey);
    }
  } else {
    if (this.right == null) {
      this.right = new TreeNode({tkey: tkey}, {parent: this, left: null, right: null})
    } else {
      this.right.insert(tkey);
    }
  }
};

Tree.prototype.height = function () {
  if (this.left == null && this.right == null) {
    this.h = 1;
  }
  else if (this.left == null) {
    this.h = this.right.height() + 1;
  } else if (this.right == null) {
    this.h = this.right.height() + 1;
  }
  else {
    this.h = Math.max(this.right.height(), this.left.height()) + 1;

  }
  return this.h
};

TreeNode.prototype.min = function () {
  if (this.left == null)
    return this;
  else
    return this.left.min()
};

TreeNode.prototype.replaceChild = function (newChild) {
  if (this.parent) {
    if (this.parent.left == this) {
      this.parent.left = newChild;
    }
    else if (this.parent.right == this) {
      this.parent.right = newChild;
    }
  }
  if (!newChild) {
    newChild.parent = this.parent;
  }
  delete this;
};

TreeNode.prototype.delete = function (tkey) {
  if (tkey < this.data.tkey) {
    this.left.delete(tkey);
  }
  else if (tkey > this.data.tkey) {
    this.right.delete(tkey);
  }
  else /*(tkey == this.data.tkey) */{
    if (this.left && this.right) {
      var newChild = this.right.min();
      this.data = newChild.data;
      newChild.delete();
    } else if (this.left) {
      this.replaceChild(this.left);
    } else if (this.right) {
      this.replaceChild(this.right);
    } else {
      this.replaceChild(null);
    }
  }
};