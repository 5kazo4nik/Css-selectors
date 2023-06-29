import { Help } from '../scripts/input/help';

describe('Test class Help', () => {
  let help;
  const levelViewerMock = {
    getCurLevel: jest.fn().mockReturnValue(0),
  };
  const inputEnterMock = {
    resizeInput: jest.fn(),
    addHelpedLevel: jest.fn(),
  };
  const inputHighlightMock = {
    colorText: jest.fn(),
  };

  beforeEach(() => {
    help = new Help(levelViewerMock, inputEnterMock, inputHighlightMock);
  });

  describe('Test setTrueSelector method', () => {
    const inputMock = document.createElement('textarea');
    document.querySelector = jest.fn().mockReturnValue(inputMock);

    beforeEach(() => {
      jest.useFakeTimers();
      help.setTrueSelector();
      jest.runAllTimers();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    test('should set true selector in input value', async () => {
      expect(inputMock.value).toBe('board');
    });

    test('should not set value in selector if input is not a textarea', () => {
      const inputMock = document.createElement('input');
      document.querySelector = jest.fn().mockReturnValue(inputMock);
      help.setTrueSelector();
      jest.runAllTimers();
      expect(inputMock.value).toBeFalsy();
    });

    test('should call colorText method of inputHighlight unside setTrueSelector', () => {
      expect(inputHighlightMock.colorText).toHaveBeenCalledWith();
    });

    test('should call addHelpedLevel method of inputEnter inside setTrueSelector', () => {
      expect(inputEnterMock.addHelpedLevel).toHaveBeenCalledWith(0);
    });
  });
});
