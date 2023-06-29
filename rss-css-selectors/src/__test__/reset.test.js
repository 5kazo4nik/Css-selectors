import { Reset } from '../scripts/view/reset';

describe('Test Reset class', () => {
  const resetLevels = jest.fn();
  const setLevel = jest.fn();

  const btnReset = document.createElement('div');
  document.querySelector = jest.fn().mockReturnValue(btnReset);
  const reset = new Reset(resetLevels, setLevel);

  test('should reset current levels list and set it to start level', () => {
    reset.reset();

    expect(resetLevels).toHaveBeenCalledWith();
    expect(setLevel).toHaveBeenCalledWith(0);
  });
});
