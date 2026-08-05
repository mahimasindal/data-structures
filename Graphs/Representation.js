
function AdjacencyList() {
 const n=4
 const edges = [[0,1],[0,2],[1,3],[2,3]]
 let graph = Array.from({length: n}, () => []);
 for(const [u,v] of edges){
    graph[u].push(v);
    graph[v].push(u); // remove this for directed graph
 }
 console.log(graph);
 return graph;
}

AdjacencyList()

function WeightedAdjacencyList(isDirected=false) {
    const n=4
    const edges = [[0,1,5],[0,2,3],[1,3,8],[2,3,2]]
    const graph = Array.from({length:n},()=>[])
    for(const [u,v,w] of edges){
        graph[u].push([v,w])
        if(!isDirected){
        graph[v].push([u,w])
        }
    }

    console.log(graph)
    return graph
}

WeightedAdjacencyList(true)

function AdjacencyListWithOnlyEdges() {
    graph = new Map()
    const edges = [[0,1],[0,2],[1,3],[2,3]]
    for(const [u,v] of edges){
       if(!graph.has(u)) graph.set(u,[])
       if(!graph.has(v)) graph.set(v,[])
        graph.get(u).push(v)
        graph.get(v).push(u) // remove this for directed graph
    }
    console.log(graph)
    return graph
}
AdjacencyListWithOnlyEdges()

function AdjacencyMatrix(){
    const edges = [[0,1],[0,2],[1,3],[2,3]]
    const n=4
    const graph = Array.from({length:n},()=>Array(n).fill(0))
    for(const [u,v] of edges){
        graph[u][v]=1
        graph[v][u]=1 // remove this for directed graph
    }
    console.log(graph)
    return graph
}
AdjacencyMatrix()



/*
So your mental checklist should be:

Given n + edges? → Build an adjacency list (most common).
Given only edges? → Use a Map if node IDs aren't contiguous.
Given an adjacency list? → Traverse directly.
Given an adjacency matrix? → Traverse directly using matrix.length as n.
*/
