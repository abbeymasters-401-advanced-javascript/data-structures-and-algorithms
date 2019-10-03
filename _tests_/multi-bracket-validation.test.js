const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('', () => {
  it('checks for matching brackets', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});