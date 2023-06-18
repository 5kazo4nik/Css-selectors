import { CodeElementCreator } from '../creator/createCodeElements';
import { TableElementCreator } from '../creator/createTableElements';
import { LEVELS } from '../data/levels';
import { HoveredElemView } from './hoveredElemView';

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

  public setCurLevel(num: number = this.curLevel + 1): void {
    this.curLevel = num;
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
}
