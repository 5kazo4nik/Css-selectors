import { CodeElementCreator } from '../creator/createCodeElements';
import { TableElementCreator } from '../creator/createTableElements';
import { LEVELS } from '../data/levels';
import { HoveredElemView } from './hoveredElemView';

enum WinText {
  HEAD = 'Congratulations!',
  TEXT = 'You have completed all the tasks',
}

export class LevelView {
  private levels = LEVELS;
  private curLevel = Number(localStorage.getItem('curLevel')) || 0;
  private levelElements = Array.from(document.querySelectorAll('.level'));
  private HoveredView = new HoveredElemView([], []);

  constructor() {
    this.buildLevel();
    this.bindEvents();
  }

  public buildLevel(): void {
    LevelView.setHighlightScript();

    const table = document.querySelector('.table__surface');
    if (table) {
      LevelView.resetLvl(table, TableElementCreator.resetElemetsArr);
      TableElementCreator.appendInnerElements(table, this.levels[this.curLevel].item);
      this.HoveredView.updateTableElems(TableElementCreator.getElementsArr());
    }

    const field = document.querySelector('.field__view');
    if (field) {
      LevelView.resetLvl(field, CodeElementCreator.resetElemetsArr);
      CodeElementCreator.appendInnerElements(field, this.levels[this.curLevel].item);
      this.HoveredView.updateCodeElems(CodeElementCreator.getElementsArr());
    }
    this.setCurLevelStyle();
  }

  private bindEvents(): void {
    document.addEventListener('click', this.clickListner.bind(this));
    window.addEventListener('beforeunload', this.saveLevel.bind(this));
  }

  private static setHighlightScript(): void {
    const oldScript = document.querySelector('.light-script');
    if (oldScript) oldScript.remove();
    const script = document.createElement('script');
    script.classList.add('.light-script');
    script.src = 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sons-of-obsidian';
    document.body.append(script);
  }

  public setCurLevel(num: number = this.curLevel + 1): void {
    const totalLevels = this.levelElements.length - 1;
    this.curLevel = num > totalLevels ? totalLevels : num;
    this.buildLevel();
  }

  public getCurLevel(): number {
    return this.curLevel;
  }

  public getLevelsList(): Element[] {
    return this.levelElements;
  }

  private clickListner(e: Event): void {
    if (e.target instanceof Element) {
      if (e.target.classList.contains('level')) {
        const pickedLevel: number = this.levelElements.indexOf(e.target);
        this.setCurLevel(pickedLevel);
      }
    }
  }

  private setCurLevelStyle(): void {
    this.levelElements.forEach((elem) => {
      elem.classList.remove('level_current');
    });
    const levelElem = this.levelElements[this.curLevel];
    levelElem.classList.add('level_current');
  }

  private saveLevel(): void {
    localStorage.setItem('curLevel', String(this.curLevel));
  }

  private static resetLvl(elem: Element, resetElemFunc: () => void): void {
    const element = elem;
    element.innerHTML = '';
    resetElemFunc();
  }

  public static finishGame(): void {
    const table = document.querySelector('.table__surface');
    if (table) {
      table.innerHTML = '';
      const winElem = document.createElement('div');
      winElem.classList.add('winner');
      const winHead = document.createElement('div');
      const winText = document.createElement('div');
      winHead.textContent = WinText.HEAD;
      winText.textContent = WinText.TEXT;

      winElem.append(winHead, winText);
      table.append(winElem);
    }
  }
}
