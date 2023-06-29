import { TableElementCreator } from '../scripts/creator/createTableElements';

describe('Test TableElementCreator class', () => {
  beforeEach(() => {
    TableElementCreator.resetElemetsArr();
  });

  describe('Test constructor', () => {
    const item1 = {
      tag: 'dish',
      status: ['move', 'small'],
      id: ['fancy'],
    };
    const item2 = {
      tag: 'board',
    };

    const creatorWithIdAndStatus = new TableElementCreator(item1);
    const creatorOnlyTag = new TableElementCreator(item2);

    test('should return elem using getElement method', () => {
      const elem1 = creatorWithIdAndStatus.getElement();
      const elem2 = creatorOnlyTag.getElement();
      expect(elem1.tagName).toBe('DISH');
      expect(elem2.tagName).toBe('BOARD');
    });

    test('should contain statuses', () => {
      const elem = creatorWithIdAndStatus.getElement();
      expect(elem.classList.contains('move')).toBe(true);
      expect(elem.classList.contains('small')).toBe(true);
    });

    test('should contain id', () => {
      const elem = creatorWithIdAndStatus.getElement();
      expect(elem.id).toBe('fancy');
    });

    test('should not contain statuses', () => {
      const elem = creatorOnlyTag.getElement();
      expect(elem.classList.contains('move')).toBe(false);
      expect(elem.classList.contains('small')).toBe(false);
    });

    test('should not contain id', () => {
      const elem = creatorOnlyTag.getElement();
      expect(elem.id).toBeFalsy();
    });
  });

  describe('Test static method appendInnerItems', () => {
    const parent = document.createElement('div');
    const item = [
      {
        tag: 'dish',
      },
      {
        tag: 'board',
        innerItem: [
          {
            tag: 'peper',
            status: ['small', 'move'],
          },
        ],
      },
    ];
    beforeEach(() => {
      parent.innerHTML = '';
      TableElementCreator.appendInnerElements(parent, item);
    });

    test('should contain correct child quantity', () => {
      expect(parent.children.length).toBe(2);
    });

    test('should contain correct tags', () => {
      const elems = parent.children;
      expect(elems[0].tagName).toBe('DISH');
      expect(elems[1].tagName).toBe('BOARD');
    });

    test('shuld contain correct inner element', () => {
      const child = parent.children[1].firstChild;
      expect(child.tagName).toBe('PEPER');
      expect(child.classList.contains('move')).toBe(true);
      expect(child.classList.contains('small')).toBe(true);
    });

    describe('Test elements arr', () => {
      test('should return correct stored elements quantity', () => {
        expect(TableElementCreator.getElementsArr().length).toBe(3);
      });
      test('should remove all stored elements', () => {
        TableElementCreator.resetElemetsArr();
        expect(TableElementCreator.getElementsArr().length).toBe(0);
      });
    });
  });
});
