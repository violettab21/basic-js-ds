const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.size) {
      this.head = new ListNode(value);
      this.tail = this.head;
      this.size += 1;
    } else {
      let prevTail = this.tail;
      this.tail = new ListNode(value);
      prevTail.next = this.tail;
      this.size += 1;
    }
  }

  dequeue() {
    if (!this.size) {
      return 1;
    } else if (this.size === 1) {
      let prevHead = this.head;
      this.head = this.tail = null;
      this.size -= 1;
      return prevHead.value;
    } else {
      let prevHead = this.head;
      this.head = prevHead.next;
      this.size -= 1;
      return prevHead.value;
    }
  }
}

module.exports = {
  Queue,
};
