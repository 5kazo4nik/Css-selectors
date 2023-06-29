import { CodeElementCreator } from '../scripts/creator/createCodeElements';

describe('Test CodeElementCreator class', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    CodeElementCreator.resetElemetsArr();
  });

  describe('Test constuctor', () => {
    const item = {
      innerItem: [],
      textOpen: '<board>',
      textClose: '</board>',
    };

    test('should create a code element', () => {
      const creator = new CodeElementCreator(item);

      expect(creator.getElement().tagName).toBe('DIV');
      expect(creator.getElement().classList.contains('prettyprint'));
    });

    test('should contain correct text', () => {
      const creator = new CodeElementCreator(item);
      expect(creator.getElement().innerHTML).toMatch(/board/);
    });
  });

  describe('Test static method appendInnerItems', () => {
    test('should contain correct child quantity', () => {
      const parent = document.createElement('div');
      const child = [
        {
          textOpen: 'element1',
        },
        {
          textOpen: 'element2',
        },
      ];
      CodeElementCreator.appendInnerElements(parent, child);

      const field = parent.children[0];
      expect(field.className).toContain('field__layout');
      expect(field.children.length).toBe(4);
      expect(field.querySelectorAll('div').length).toBe(2);
    });
  });

  describe('Test elements arr', () => {
    beforeEach(() => {
      const parent = document.createElement('div');
      const item = [
        {
          innerItem: [
            {
              textOpen: 'element1',
            },
            {
              textOpen: 'element2',
            },
          ],
          textOpen: '<board>',
          textClose: '</board>',
        },
      ];
      CodeElementCreator.appendInnerElements(parent, item);
    });

    test('should return correct stored elements quantity', () => {
      expect(CodeElementCreator.getElementsArr().length).toBe(3);
    });
    test('should remove all stored elements', () => {
      CodeElementCreator.resetElemetsArr();
      expect(CodeElementCreator.getElementsArr().length).toBe(0);
    });
  });
});
