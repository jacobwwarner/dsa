class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head; 
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    findNodeIteratively(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    findNoteRecursively(value, current = this.head) {
        if (current === null) {
            return null;
        } else if (current.value === value) {
            return current;
        } else {
            return this.findNodeRecursively(value, current.next);
        }
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(value) {
        if (index < 0 || index > length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        const newNode = new Node(value);
        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let before = this.get(index - 1);
        let temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    merge(otherList) {
        let otherHead = otherList.head;
        let dummy = { value: 0, next: null };
        let current = dummy;

        while (this.head !== null && otherHead !== null) {
            if (this.head.value < otherHead.value) {
                current.next = this.head;
                this.head = this.head.next;
            } else {
                current.next = otherHead;
                otherHead = otherHead.next;
            }
            current = current.next;
        }
        if (this.head !== null) {
            current.next = this.head;
        } else {
            current.next = otherHead;
            this.tail = otherList.tail;
        }
        this.head = dummy.next;
        this.length += otherList.length;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = this.temp;
        prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }

    reverseBetween(m, n) {
        if (this.head === null) return;
        const dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;
        for (let i = 0; i < m; i++) {
            prev = prev.next;
        }
        let current = prev.next;
        for (let i = 0; i < n - m; i++) {
            const temp = current.next;
            current.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
        }
        this.head = dummy.next;
    }

    findMiddleNode() {
        // Initialize slow and fast pointers at head.
        let slow = this.head;
        let fast = this.head;
        // Iterate through the list
        while (fast !== null && fast.next !== null) {
            // Move slow pointer one step.
            slow = slow.next;
            // Move fast pointer two steps.
            fast = fast.next.next;
        }
        // Return middle node when fast reaches end.
        return slow;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;
        for (let i = 0; i < k; i++) {
            if (fast === null) return null;
            fast = fast.next;
        }
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }

    partitionList(x) {
        if (this.head === null) return;
        const dummy1 = new Node(0);
        const dummy2 = new Node(0);
        let prev1 = dummy1;
        let prev2 = dummy2;
        let current = this.head;
        while (current !== null) {
            if (current.value < x) {
                prev1.next = current;
                prev1 = current;
            } else {
                prev2.next = current;
                prev2 = current;
            }
            current = current.next;
        }
        prev2.next = null;
        prev1.next = dummy2.next;
        this.head = dummy1.next;
    }

    removeDuplicates() {
        const values = new Set();
        let previous = null;
        let current = this.head;
        while (current !== null) {
            if (values.has(current.value)) {
                previous.next = current.next;
                this.length -= 1;
            } else {
                values.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }

    binaryToDecimal() {
        let num = 0;
        let current = this.head;
        while (current !== null) {
            num = num * 2 + current.value;
            current = current.next;
        }
        return num;
    }

}



export default LinkedList;
