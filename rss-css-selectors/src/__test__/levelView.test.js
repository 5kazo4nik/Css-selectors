import { CodeElementCreator } from '../scripts/creator/createCodeElements';
import { TableElementCreator } from '../scripts/creator/createTableElements';
import { LevelView } from '../scripts/view/levelView';

describe('Test LevelView class', () => {
  let levelView;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="table__surface"></div>
    <div class="field__view"></div>
    <div class="level"></div>
    <div class="level"></div>
    <div class="level"></div>
  `;
    levelView = new LevelView();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    localStorage.clear();
  });

  describe('Test buildLevel method', () => {
    test('should call setHightlightScript method', () => {
      const setHightlightScriptSpy = jest.spyOn(LevelView, 'setHighlightScript');
      levelView.buildLevel();
      expect(setHightlightScriptSpy).toHaveBeenCalledTimes(1);
    });

    test('should reset, appemd and update table elements', () => {
      const resetLvlSpy = jest.spyOn(LevelView, 'resetLvl');
      const appendInnerElementsSpy = jest.spyOn(TableElementCreator, 'appendInnerElements');
      const updateTableElementsSpy = jest.spyOn(levelView.HoveredView, 'updateTableElems');

      levelView.buildLevel();

      expect(resetLvlSpy).toHaveBeenCalledWith(expect.any(Element), TableElementCreator.resetElemetsArr);
      expect(appendInnerElementsSpy).toHaveBeenCalledWith(expect.any(Element), expect.any(Array));
      expect(updateTableElementsSpy).toHaveBeenCalledWith(expect.any(Array));
    });

    test('should reset, append and update code elements', () => {
      const resetLvlSpy = jest.spyOn(LevelView, 'resetLvl');
      const appendInnerElementsSpy = jest.spyOn(CodeElementCreator, 'appendInnerElements');
      const updateCodeElemsSpy = jest.spyOn(levelView.HoveredView, 'updateCodeElems');

      levelView.buildLevel();

      expect(resetLvlSpy).toHaveBeenCalledWith(expect.any(Element), CodeElementCreator.resetElemetsArr);
      expect(appendInnerElementsSpy).toHaveBeenCalledWith(expect.any(Element), expect.any(Array));
      expect(updateCodeElemsSpy).toHaveBeenCalledWith(expect.any(Array));
    });

    test('should call setCurLevelStyle method', () => {
      const setCurLevelStyleSpy = jest.spyOn(levelView, 'setCurLevelStyle');
      levelView.buildLevel();
      expect(setCurLevelStyleSpy).toHaveBeenCalledWith();
    });
  });

  describe('Test getCurLevel method', () => {
    test('should return curLevel as number', () => {
      expect(levelView.getCurLevel()).toBe(0);
    });
  });

  describe('Test setCurLevel method', () => {
    test('should set curLevel to the given number value', () => {
      levelView.setCurLevel(2);
      expect(levelView.getCurLevel()).toBe(2);
    });

    test('should set curLevel to last level if given number bigger then total levels', () => {
      levelView.setCurLevel(10);
      expect(levelView.getCurLevel()).toBe(2);
    });

    test('should call buildLevel method', () => {
      const buildLevelSpy = jest.spyOn(levelView, 'buildLevel');
      levelView.setCurLevel(2);
      expect(buildLevelSpy).toHaveBeenCalledWith();
    });
  });

  describe('Test setCurLevelStyle method', () => {
    test('should add class level__current to current level elem', () => {
      const levelElements = document.querySelectorAll('.level');

      levelView.setCurLevelStyle();

      expect(levelElements[0].classList.contains('level_current')).toBe(true);
      expect(levelElements[1].classList.contains('level_current')).toBe(false);
      expect(levelElements[2].classList.contains('level_current')).toBe(false);
    });
  });

  describe('Test saveCurLevel method', () => {
    test('should save curLevel in localStorage', () => {
      levelView.setCurLevel(1);
      levelView.saveLevel();
      expect(localStorage.getItem('curLevel')).toBe('1');
    });
  });

  describe('Test finishGame method', () => {
    test('should clear table element and display finish text', () => {
      const table = document.querySelector('.table__surface');
      LevelView.finishGame();
      const winner = table.firstChild;

      expect(winner.classList.contains('winner')).toBe(true);
      expect(winner.children.length).toBe(2);
      expect(winner.children[0].textContent).toBe('Congratulations!');
      expect(winner.children[1].textContent).toBe('You have completed all the tasks');
    });
  });
});
