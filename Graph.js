class Graph {
    // CodeEvolution used a Linked List Hash Map implementation
    constructor() {
        this.adjacenyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacenyList[vertex]) {
            this.adjacenyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacenyList[vertex1] && this.adjacenyList[vertex2]) {
            this.adjacenyList[vertex1].push(vertex2);
            this.adjacenyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacenyList[vertex1] && this.adjacenyList[vertex2]) {
            this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter((v) => v !== vertex2);
            this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter((v) => v !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (!this.adjacenyList[vertex]) return undefined
        while (this.adjacenyList[vertex].length) {
            // Continue running while the vertex has some length above 0.
            let temp = this.adjacenyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacenyList[vertex];
        return this;        
    }

}