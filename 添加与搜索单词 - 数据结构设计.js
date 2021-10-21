class Trie {
  deep = 0

  constructor() {
    this.children = {}
  }

  /**
   *
   * @param str {string}
   */
  insert(str) {
    let node = this.children
    for (const strElement of str) {
      if (!node[strElement]) {
        node[strElement] = {}
      }
      node = node[strElement]
    }
    node.deep = this.deep++
  }

  /**
   *
   * @param str {string}
   */
  search(str) {
    return this.searchPrefix(str)
  }

  /**
   *
   * @param str {string}
   * @return boolean
   */
  startsWith(str) {
    return !!this.searchPrefix(str);
  }

  searchPrefix(prefix) {
    let node = this.children;
    const dfs = (index, node) => {
      if (index === prefix.length) return Number.isInteger(node.deep)
      const ch = prefix[index]
      if (ch !== ".") {
        const child = node[ch]
        if (child && dfs(index + 1, child)) return true
      } else {
        for (let nodeEle of Object.keys(node)) {
          if (nodeEle !== "deep" && dfs(index + 1, node[nodeEle])) return true
        }
      }


      return false
    }
    return dfs(0, node)
  }

  collect(node, pre, q) {

    if (Number.isInteger(node.deep) && Object.keys(node).length === 1) {
      q.push(pre)
      return
    }
    for (let c in node) {
      this.collect(node[c], pre + c, q)
    }
  }

  keys() {
    let q = []
    this.collect(this.searchPrefix(""), "", q)
    return q
  }
}

var WordDictionary = function () {
  this.obj = new Trie()
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.obj.insert(word)
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.obj.search(word)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
