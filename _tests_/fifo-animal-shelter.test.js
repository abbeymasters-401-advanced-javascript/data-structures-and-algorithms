const { AnimalShelter } = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('fifo animal shelter', () => {

  it('enqueue actually adds an animal', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue({ name: 'abbey', type: 'dog' });
    animalShelter.enqueue({ name: 'alex', type: 'dog' });
    animalShelter.enqueue({ name: 'allison', type: 'cat' });
    expect(animalShelter.catsQueue.front.value).toBe('allison');
    expect(animalShelter.dogsQueue.front.value).toBe('abbey');
  });

  it('dequeues an animal', () => {
    const animalShelter = new AnimalShelter();

    animalShelter.enqueue({ name: 'abbey', type: 'dog' });
    animalShelter.enqueue({ name: 'alex', type: 'dog' });
    animalShelter.enqueue({ name: 'allison', type: 'cat' });
    
    let results = animalShelter.dogsQueue.dequeue();
    expect(results).toBe('abbey');
  });
});