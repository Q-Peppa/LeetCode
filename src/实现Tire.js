class Trie {
  constructor () {
    this.children = {}
  }

  /**
   *
   * @param str {string}
   */
  insert (str) {
    let node = this.children
    for (const strElement of str) {
      if (!node[strElement]) {
        node[strElement] = {}
      }
      node = node[strElement]
    }
    node.isEnd = true
  }

  /**
   *
   * @param str {string}
   */
  search (str) {
    const node = this.searchPrefix(str)
    return node !== undefined && node.isEnd !== undefined
  }

  /**
   *
   * @param str {string}
   * @return boolean
   */
  startsWith (str) {
    return !!this.searchPrefix(str)
  }

  searchPrefix (prefix) {
    let node = this.children
    for (const ch of prefix) {
      if (!node[ch]) {
        return false
      }
      node = node[ch]
    }
    return node
  }
}
