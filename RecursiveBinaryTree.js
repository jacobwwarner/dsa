class RecursiveBinaryTree {
    constructor() {

    }

    rContains(value, currentNode=this.root) {
        if (currentNode === false) return false;
        if (value === currentNode.value) return true;
        if (Value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        } else {
            return this.rContains(value, currentNode.right);
        }
    }

    #rInsert(value, currentNode=this.root) {
        if (currentNode === null) return new Node(value);
        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;
    }   

    rInsert(value) {
        this.#rInsert(value);
    }

    #deleteNode(value, currentNode) {
        if (currentNode === null) return null;
        if (value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#deleteNode(value, currentNode.right);
        } else {
            if (currentNode.left === null & currentNode.right === null) {
                currentNode = null;
            } else if (currentNode.left === null) {
                currentNode = currentNode.right;
            } else if (currentNode.right === null) {
                currentNode = currentNode.left;
            } else {
                let subTreeMin = this.minValue (currentNode.right);
                currentNode.value = subTreeMin;
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
            }
        }
        return currentNode;
    }

    deleteNode() {
        this.root = this.#deleteNode(value, this.root);
    }

    minValue(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

}