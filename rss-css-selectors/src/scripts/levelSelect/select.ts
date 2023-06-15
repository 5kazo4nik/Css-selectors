import { CodeElementCreator } from '../creator/createCodeElements';
import { TableElementCreator } from '../creator/createTableElements';
import { LEVELS } from '../data/levels';

export class LevelView {
  private levels = LEVELS;
  private curLevel = Number(localStorage.getItem('curLevel')) || 0;
  constructor() {
    this.buildLevel();
    this.bindEvents();
  }

  public buildLevel(): void {
    const table = document.querySelector('.table__surface');
    if (table) {
      table.innerHTML = '';
      TableElementCreator.appendInnerElements(table, this.levels[this.curLevel].item);
    }

    const field = document.querySelector('.field__view');
    if (field) {
      field.innerHTML = '';
      CodeElementCreator.appendInnerElements(field, this.levels[this.curLevel].item);
    }
  }

  private bindEvents(): void {
    document.addEventListener('click', this.clickListner.bind(this));
    window.addEventListener('beforeunload', this.saveLevel.bind(this));
  }

  private setCurLevel(num: number = this.curLevel + 1): void {
    this.curLevel = num;
    this.buildLevel();
  }

  private clickListner(e: Event): void {
    const levelElements = Array.from(document.querySelectorAll('.level'));

    if (e.target instanceof Element) {
      if (e.target.classList.contains('level')) {
        const pickedLevel: number = levelElements.indexOf(e.target);
        this.setCurLevel(pickedLevel);
      }
    }
  }

  private saveLevel(): void {
    localStorage.setItem('curLevel', String(this.curLevel));
  }
}
