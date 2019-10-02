const { AnimalShelter } = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('fifo animal shelter', () => {

  it('enqueue adds an animal', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');
    expect(animalShelter.top.value).toBe('cat');
  });

});