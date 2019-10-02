
class AnimalShelter {
  constructor(value) {
    this.top = null;
  }

  enqueue(animal) {
    this.list.push(animal);
  }
  
  dequeue(type) {
    let found = null;
    if(type) {
      found = this.list.findAndRemove(pet => pet.type === type);
    }
    
    if(!found) found = this.list.remove();
    return found;
  }
}

module.exports = {
  AnimalShelter,
};
