const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this.length;
        // return ++this.length;
        // Write your hypothesis on the time complexity of this method here
        // This should have a time complexity of O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        const headNode = this.head;
        if (!headNode) return null;
        else if (!headNode.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = headNode.next;
        }
        this.length--;
        return headNode.value;
        // Write your hypothesis on the time complexity of this method here
        // This should have a time complexity of O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
