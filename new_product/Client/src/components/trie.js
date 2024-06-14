// trie.js
class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
      this.items = [];
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(item) {
      let node = this.root;
      for (let char of item.name.toLowerCase()) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
      node.items.push(item);
    }
  
    search(prefix) {
      let node = this.root;
      for (let char of prefix.toLowerCase()) {
        if (!node.children[char]) {
          return [];
        }
        node = node.children[char];
      }
      return this._collectAllWords(node);
    }
  
    _collectAllWords(node) {
      let results = [];
      if (node.isEndOfWord) {
        results.push(...node.items);
      }
      for (let child in node.children) {
        results.push(...this._collectAllWords(node.children[child]));
      }
      return results;
    }
  }
  
  export default Trie;
  