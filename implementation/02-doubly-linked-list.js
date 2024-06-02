// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        // This method has a time complexity of O(1) because it takes the same time to add to the head
        // regardless of the number of nodes.
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val)
        if(this.length ===  0) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        // Write your hypothesis on the time complexity of this method here
        // This method has a time complexity of O(1) because, due to addition of the tail pointer
        // it takes the same time to add to the tail
        // regardless of the number of nodes
    }

    removeFromHead() {
        // Remove node at head
        const currentHead = this.head;
        if (!currentHead) return;
        if(!currentHead.next) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            currentHead.next.prev = null;
            this.head = currentHead.next;
            this.length--;
        }
        return currentHead.value;
        // Write your hypothesis on the time complexity of this method here
        // This method has a time complexity of O(1) because it takes the same time to remove from the head
        // regardless of the number of nodes.
    }

    removeFromTail() {
        // Remove node at tail
        const currentTailNode = this.tail;
         if (this.length === 0) return;
         else if (this.tail && !this.tail.prev) {
            this.head = null;
            this.tail = null;
         }
         else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
         }
         this.length--;
         return currentTailNode.value;
        // Write your hypothesis on the time complexity of this method here
        // This method has a time complexity of O(1) because it takes the same time to remove from the tail
        // regardless of the number of nodes.
    }

    peekAtHead() {
        // Return value of head node
        if (this.length === 0) return
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
        // this method takes the same amount of time to complete regardless of the number of nodes
        // therefore its time complexity is O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length === 0) return
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
        // this method takes the same amount of time to complete regardless of the number of nodes
        // therefore its time complexity is O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
