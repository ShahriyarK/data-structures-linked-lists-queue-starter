// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // Time complexity is O(1) as it doesn't require traversal through the linked list
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;
        // Time complexity
        // since, this method requires linked list traversal so worse case time complexity is O(n)
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return;
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return;
        let current = this.head;
        if (!current.next) {
            this.head = null;
            this.length--;
            return current;
        }
        while( current.next && current.next.next) {
            current = current.next
        }
        const nodeToRemove = current.next;
        current.next = null;
        this.length--;
        return nodeToRemove;
        // Write your hypothesis on the time complexity of this method here
        // Worst case time complexity is O(n) since this requires traversal
        // of the linked list to reach the node before the tail node
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        // Write your hypothesis on the time complexity of this method here
        // In worst case, this has a time complexity of O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
