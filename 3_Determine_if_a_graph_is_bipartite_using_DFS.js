// Javascript program to check if a connected
// graph is bipartite or not using DFS
 
// function to store the connected nodes
function addEdge(adj, u, v)
{
    adj[u].push(v);
    adj[v].push(u);

    // 0:[]
    // 1:[2, 6]
    // 2:[1, 3]
    // 3:[2, 4]
    // 4:[3, 5]
    // 5:[4, 6]
    // 6:[5, 1]

}
 
// function to check whether a graph is bipartite or not
function isBipartite(adj, v, visited, color)//adj, 1, visited:(7) [true], color:(7) [0]
{
    //adj[v] = adj[1] = [2, 6]
    adj[v].forEach(u => {
         
 
        // if vertex u is not explored before
        if (visited[u] == false) { //visited[2] = false
 
            // mark present vertic as visited
            visited[u] = true;
 
            // mark its color opposite to its parent
            color[u] = !color[v]; //color[2] != color[1], color[1] = 1
 
            // if the subtree rooted at vertex v is not bipartite
            if (!isBipartite(adj, u, visited, color))
                return false;//I think this means reached the root if no u to continue
        }
 
        // if two adjacent are colored with same color then
        // the graph is not bipartite
        else if (color[u] == color[v])
            return false;
    });
    return true;
}
 
// Driver Code
// no of nodes
var N = 6;
// to maintain the adjacency list of graph
var adj = Array.from(Array(N+1), ()=>Array());
//console:
//=> [0, 1, 2, 3, 4, 5, 6]

// to keep a check on whether
// a node is discovered or not
var visited = Array(N+1);;

// to color the vertices
// of graph with 2 color
var color = Array(N+1);

// adding edges to the graph
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);
addEdge(adj, 3, 4);
addEdge(adj, 4, 5);
addEdge(adj, 5, 6);
addEdge(adj, 6, 1);

// marking the source node as visited, console: (7) [true]
visited[1] = true;
// marking the source node with a color, console: (7) [0]
color[1] = 0;

// Function to check if the graph
// is Bipartite or not
if (isBipartite(adj, 1, visited, color)) {
    document.write( "Graph is Bipartite");
}
else {
    document.write( "Graph is not Bipartite");
}



//another solution from leetcode discussion:
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
 const isBipartite = graph => {
    const n = graph.length
    let colors = new Array(n).fill(0)
    
    for (let i = 0; i < n; i++) {
        if (colors[i]) continue
        
        if (!canDoColoring(i, 1, graph, colors)) return false
    }
    
    return true
};

const canDoColoring = (node, color, graph, colors) => {
    if (colors[node]) {
        return color === colors[node]
    }
    
    colors[node] = color
    
    for (let i = 0; i < graph[node].length; i++) {
        const neighbor = graph[node][i]
        if (!canDoColoring(neighbor, -color, graph, colors)) {
            return false
        }
    }
    
    return true
}