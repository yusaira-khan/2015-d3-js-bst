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
TreeNode.prototype.draw= function(){
  this.left.draw();
  this.right.draw();
};
