const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor(value) {
    this.dogsQueue = new Queue();
    this.catsQueue = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogsQueue.enqueue(animal.name);
    } else if (animal.type === 'cat') {
      this.catsQueue.enqueue(animal.name);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogsQueue.dequeue();
    } else if(pref === 'cat') {
      return this.catsQueue.dequeue();
    }
    else {
      return null;
    }
  }
}

module.exports = {
  AnimalShelter,
};
