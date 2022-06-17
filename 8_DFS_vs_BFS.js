//https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf


//DFS:
class Node {
    constructor(name) {
      this.name = name;
      this.children = []; //array of children nodes
    }
  
    addChild(name) {
      this.children.push(new Node(name)); //appending new nodes to the children array
      return this;
    }
    
    //#O(v + e) time / O(v) space
    //v represents vertices, e represents edges
    depthFirstSearch(array) {
      // append to the array the node's name
          array.push(this.name); //append to array the node's name
          for(const child of this.children) {
              child.depthFirstSearch(array); //call the depthSearch on child and pass in the final array
          }
          return array; //only useful at the very first call
    }
  } //the idea is we append "A" and go through all the children 
  
  // Do not edit the line below.
  exports.Node = Node;



  //BFS:
  // and methods to the class.
class Node {
    constructor(name) {
      this.name = name; //every node has a name
      this.children = []; //every node has a children array
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    //O(v + e) time / O(v) space
    breadthFirstSearch(array) {
      // Write your code here.
          const queue = [this]; //it's holding the first node
          while (queue.length > 0) { //while the queue is not empty
              const current = queue.shift(); //take the value at index zero in the queue
              array.push(current.name);
              for (const child of current.children) {
                  queue.push(child);
              }
          }
          return array;
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;