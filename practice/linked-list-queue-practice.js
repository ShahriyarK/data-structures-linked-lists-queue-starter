// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // O(n) solution (space complexity is O(1))
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;

        // O(1) solution (Space complexity O(1))
        // return this.length
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let curr = this.head;
        // linked list is empty
        if(!curr) return 0;

        let sum = curr.value;
        while(curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
        // worst case time complexity is O(n) since it involves linked list traversal
        // space complexity is O(1)
    }

    averageValue() {
        // Returns the average value of all the nodes
        if (!this.head) return 0;
        return this.sumOfNodes()/this.listLength()
        // Write your hypothesis on the time complexity of this method here
        // This has the same time and space complexities as sumOfNodes
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;
        let curr = this.head;
        while(curr) {
            if (count === n) return curr;
            curr = curr.next;
            count++
        }
        return null;
        // Write your hypothesis on the time complexity of this method here
        // Since this involves traversal of the linked list to find the node at
        // position n, this has a worst case time complexity of O(n) and space complexity is O(1)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // Singly Linked List
        if (!this.head) return null;
        let singleStepPointer = this.head;
        let doubleStepPointer = this.head;
        while (singleStepPointer.next && doubleStepPointer.next?.next) {
            singleStepPointer = singleStepPointer.next;
            doubleStepPointer = doubleStepPointer.next.next;
        }
        return singleStepPointer;
            // How do the implementation for singly and doubly vary if at all?
        // tbh, in this case the implementation does not vary for singly linked list
        // or doubly linked list because we are only concerned with traversing forward
        // without needing to go back.

        // Write your hypothesis on the time complexity of this method here
        // the time complexity is O(n) because in the worst case the doubleStepPointer
        // traverses half of the linked list so its n/2 operations and ignoring constant,
        // this becomes O(n). Space complexity is O(1)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newLinkedList = new SinglyLinkedList()
        if (!this.head) return newLinkedList;
        let curr = this.head;
        while (curr) {
            const next = newLinkedList.head
            newLinkedList.head = {value: curr.value};
            newLinkedList.head.next = next;
            curr = curr.next;
        }
        return newLinkedList;
        // Write your hypothesis on the time complexity of this method here

        // time complexity is O(n) as this requires traversal of the whole linked list
        // space complexity is O(n) because as a new node is created for each node in the original
        // list.

        // There could be a alternative solution to above using the existing instance methods.
        // One approach is as follows:

        // const newLinkedList = new SinglyLinkedList();
        // if(!this.head) return newLinkedList;
        // const numberOfNodes = this.listLength();
        // for (let i = numberOfNodes - 1; i >= 0; i--) {
        //     const node = this.findNthNode(i);
        //     newLinkedList.addToTail(node.value);
        // }
        // return newLinkedList;

        // however the above has a time complexity of O(n^2) so this is inefficient.
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if(!this.head) return
        let curr = this.head;
        let prev = null;
        while (curr) {
            const next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(n) because each node is visited exactly once.
        // space complexity is O(1) because we are reversing the linked list in place
        // so no new nodes are being created
    }
}

// reversing in place strategy
// head ---> 1 ---> 2 ---> 3 ---> 4 ---> null
// to reverse this we need to reverse each arrow
// null <--- 1 <--- 2 <--- 3 <--- 4
// then we update the head
// null <--- 1 <--- 2 <--- 3 <--- 4 <--- head

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        if (!this.head) return null;
        let fastPointer = this.head;
        let slowPointer = this.head;
        while (slowPointer.next && fastPointer.next?.next) {
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
        }
        return slowPointer;
        // How do the implementation for singly and doubly vary if at all?
            // In this case the implementation does not vary for singly linked list
            // or doubly linked list because we are only concerned with traversing forward
            // without needing to go back.
        // Write your hypothesis on the time complexity of this method here
        // time complexity: O(n)
        // space complexity: O(1)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newLinkedList = new DoublyLinkedList();
        if (!this.head) return newLinkedList;
        let curr = this.tail;
        while(curr) {
            newLinkedList.addToTail(curr.value);
            curr = curr.prev;
        }
        return newLinkedList;
        // Write your hypothesis on the time complexity of this method here
            // time complexity is O(n) since each node is visited exactly once
            // space complexity is O(n) since for each node in the original linked list,
            // a new node is created.
        // How do the implementation for singly and doubly vary if at all?
            // The implementation is a bit simpler now in terms of readability
            // We can utilize the already existing addToTail method to reverse the linked list
            // the benefit is that for a doubly linked list, addToTail is O(1)
            // However there is not much benefit in terms of performance since time and
            // space complexity for both remain the same.
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if(!this.head) return;
        const head = this.head;
        let curr = this.tail;
        while(curr) {
            let prev = curr.prev;
            curr.prev = curr.next;
            curr.next = prev;
            curr = prev;
        }
        this.head = this.tail;
        this.tail = head;
        // Write your hypothesis on the time complexity of this method here
        // since this involves linked list traversal, time complexity is O(n)
        // since this is a reversInPlace, space complexity is O(1)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
