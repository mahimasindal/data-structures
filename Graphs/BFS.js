// SHortest path in an unweighted graph using BFS

function bfs(source, destination){
const n = 7

const edges = [
    [0,1],
    [0,2],
    [1,3],
    [2,3],
    [3,4],
    [4,5],
    [4,6]
]

const graph = Array.from({length:n},()=>[])
for(const[u,v] of edges){
    graph[u].push(v)
    graph[v].push(u) // remove this for directed graph
}

const q = [[source,0]] // store node and distance from source   
const visited = new Set([source])
const parent = Array(n).fill(-1);
while(q.length>0){
    const [node,distance] = q.shift()
    if(node===destination){
        console.log(`Shortest path from ${source} to ${destination} is ${distance}`)
        return distance
    }
    for(const neighbor of graph[node]){
        if(!visited.has(neighbor)){
            parent[neighbor] = node;
            visited.add(neighbor)
            q.push([neighbor, distance + 1])
        }
}

}
}

bfs(0,5)



function bfsPath(source, destination){
const n = 7

const edges = [
    [0,1],
    [0,2],
    [1,3],
    [2,3],
    [3,4],
    [4,5],
    [4,6]
]

const graph = Array.from({length:n},()=>[])
for(const[u,v] of edges){
    graph[u].push(v)
    graph[v].push(u) // remove this for directed graph
}

const q = [[source,0]] // store node and distance from source   
const visited = new Set([source])
const parent = Array(n).fill(-1);
while(q.length>0){
    const [node,distance] = q.shift()
    if(node===destination){
        console.log(`Shortest path from ${source} to ${destination} is ${distance}`)
        break
    }
    for(const neighbor of graph[node]){
        if(!visited.has(neighbor)){
            parent[neighbor] = node;
            visited.add(neighbor)
            q.push([neighbor, distance + 1])
        }
}

}
let path = []
let i = destination
while(i!=-1){
    path.push(i)
    i = parent[i]
}
console.log(`Shortest path from ${source} to ${destination}     is: ${path.reverse().join(' -> ')}`)
//console.log(`No path from ${source} to ${destination}`)
// return -1 // if destination is not reachable
}

bfsPath(0,5)


/**
 * Time Complexity
Building graph = O(E)
BFS = O(V + E)
Reconstruction = O(V)
Overall = O(V + E)

Space
Graph      O(V+E)
Visited    O(V)
Parent     O(V)
Queue      O(V)
 */