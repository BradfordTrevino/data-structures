class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
    this.bottom = 0;
  }

  enqueue(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  dequeue() {
    var dequeued = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
