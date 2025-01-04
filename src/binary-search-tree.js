const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addItem(data, this.rootNode);
    function addItem(data, root) {
      if (!root) {
        root = new Node(data);
        return root;
      }
      if (data > root.data) {
        root.right = addItem(data, root.right);
      } else {
        root.left = addItem(data, root.left);
      }
      return root;
    }
  }

  has(data) {
    function isPresent(data, root) {
      if (!root) {
        return false;
      }
      if (data === root.data) {
        return true;
      } else if (data > root.data) {
        return isPresent(data, root.right);
      } else return isPresent(data, root.left);
    }
    return isPresent(data, this.rootNode);
  }

  find(data) {
    function findItem(data, root) {
      if (!root) {
        return null;
      }
      if (data === root.data) {
        return root;
      } else if (data > root.data) {
        return findItem(data, root.right);
      } else return findItem(data, root.left);
    }
    return findItem(data, this.rootNode);
  }

  remove(data) {
    this.rootNode = removeItem(data, this.rootNode);
    function removeItem(data, root) {
      if (!root) {
        return root;
      }
      if (data === root.data) {
        if (!root.left && !root.right) root = null;
        else if (!root.left && root.right) {
          root = root.right;
        } else if (root.left && !root.right) {
          root = root.left;
        } else if (root.left && root.right) {
          let replaceTo = root.left;
          while (replaceTo.right) {
            replaceTo = replaceTo.right;
          }
          root.data = replaceTo.data;
          root.left = removeItem(replaceTo.data, root.left);
        }
        return root;
      } else if (data > root.data) {
        root.right = removeItem(data, root.right);
      } else root.left = removeItem(data, root.left);
      return root;
    }
  }

  min() {
    if (this.rootNode) {
      let min = this.rootNode.left;
      while (min.left) {
        min = min.left;
      }
      return min.data;
    }
    return null;
  }

  max() {
    if (this.rootNode) {
      let max = this.rootNode.right;
      while (max.right) {
        max = max.right;
      }
      return max.data;
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree,
};
