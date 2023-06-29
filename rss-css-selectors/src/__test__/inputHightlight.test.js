import { InputHightlight } from '../scripts/view/inputHightlight';

describe('Test InputHightlight class', () => {
  const inputMock = document.createElement('textarea');
  const fieldMock = document.createElement('div');
  document.querySelector = jest.fn((selector) => {
    if (selector === '.field__input') return inputMock;
    if (selector === '.field__colored-input') return fieldMock;
    return null;
  });
  const inputHightlight = new InputHightlight();

  beforeEach(() => {
    inputMock.value = '';
    fieldMock.innerHTML = '';
  });

  describe('Add correct spans in field', () => {
    test('should add correct tag-colored spans', () => {
      inputMock.value = 'dish board';
      inputHightlight.colorText();
      expect(fieldMock.innerHTML).toBe('<span class="tag-selector">dish</span><span class="tag-selector"> </span><span class="tag-selector">board</span>');
    });

    test('should add correct id-colored spans', () => {
      inputMock.value = '#fancy';
      inputHightlight.colorText();
      expect(fieldMock.innerHTML).toBe('<span class="tag-selector"></span><span class="id-selector">#</span><span class="id-selector">fancy</span>');
    });

    test('should add correct class-colored spans', () => {
      inputMock.value = '.small';
      inputHightlight.colorText();
      expect(fieldMock.innerHTML).toBe('<span class="tag-selector"></span><span class="class-selector">.</span><span class="class-selector">small</span>');
    });

    test('should combine different spans correctly', () => {
      inputMock.value = '#fancy peper.small';
      inputHightlight.colorText();
      expect(fieldMock.innerHTML).toBe(
        '<span class="tag-selector"></span><span class="id-selector">#</span><span class="id-selector">fancy</span><span class="tag-selector"> </span><span class="tag-selector">peper</span><span class="class-selector">.</span><span class="class-selector">small</span>'
      );
    });

    test('should remove all spans', () => {
      inputMock.value = 'peper';
      inputHightlight.colorText();
      expect(fieldMock.innerHTML).toBe('<span class="tag-selector">peper</span>');
      inputHightlight.uncolorText();
      expect(fieldMock.innerHTML).toBe('');
    });
  });
});
