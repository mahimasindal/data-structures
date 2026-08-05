/*
When should your brain think "DFS"?

These keywords are clues:
Is there a path?
Explore all possibilities
Connected components
Detect cycles
Islands
Flood Fill
Backtracking
Tree traversal
*/


// 1. DFS Template
function dfs(node){

    visited.add(node);

    for(const neighbor of graph[node]){

        if(!visited.has(neighbor)){

            dfs(neighbor);

        }

    }

}

// 2. Connected Components Template
function dfsConnectedComponents(node){
visited = new Set();
count = 0;

for (let node = 0; node < n; node++) {

    if (!visited.has(node)) {

        dfs(node);

        count++;
    }

}
}


//3. Cycle Detection Template undirected graph

dfs(node, parent){

    visited.add(node)

    for(neighbor){

        if(!visited){

            dfs(neighbor,node)

        }

        else if(neighbor !== parent){

            console.log("Cycle found")
            return true

        }

    }

}

// 4. Cycle Detection Template directed graph
/* 0 = Unvisited
1 = Visiting
2 = Visited*/
function hasCycle(n, edges) {

    const graph = Array.from({length:n},()=>[])
    for(const [u,v] of edges){
        graph[u].push(v)
    }

    const state = Array(n).fill(0)

    function dfs(node) {

        state[node] = 1 // mark as visiting

       /* We return early only when we've already found the answer. 
       Otherwise, we continue exploring because another branch may still contain the answer. */ 
        for (const neighbor of graph[node]) {

            // Case 1
            if(state[neighbor] === 0){
                  if(dfs(neighbor)) return true
            }

            // Case 2
            else if(state[neighbor] === 1)
                return true    

            // Case 3
            // else  state[neighbor] === 2  nothing to do
         

        }

          state[node] = 2  // mark visited

        return false

    }

    for (let i = 0; i < n; i++) {

        if (state[i] === 0) {

            if (dfs(i)) return true

        }

    }

    return false

}