import { LevelView } from '../view/levelView';

export class InputEnter {
  private inputView = document.querySelector('.input-view');
  private inputBtn = document.querySelector('.field__btn');
  private completedLevels: number[];
  private helpedLevels: number[];

  constructor(private levelView: LevelView) {
    this.completedLevels = InputEnter.initLevel('completedLevels');
    this.helpedLevels = InputEnter.initLevel('helpedLevels');
    this.setLevelsStatus();
    this.bindEvents();
  }

  private static initLevel(name: string): number[] {
    const level = localStorage.getItem(name);
    if (level) return JSON.parse(level);
    return [];
  }

  private bindEvents(): void {
    const input = document.querySelector('.field__input');
    if (this.inputBtn) this.inputBtn.addEventListener('click', this.submitListner.bind(this));
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e instanceof KeyboardEvent && e.code === 'Enter') {
          this.submitListner.bind(this)();
        }
      });
    }
    if (input instanceof HTMLInputElement && this.inputView) {
      this.inputView.addEventListener('mouseup', () => {
        InputEnter.focusInput.bind(this, input)();
      });
    }

    window.addEventListener('beforeunload', this.saveLevels.bind(this));
  }

  private submitListner(): void {
    const input = document.querySelector('.field__input');
    if (!(input instanceof HTMLInputElement)) return;
    const { value } = input;
    const isWin = this.defineWinOrLoseSelector(value);
    const isFinished = this.checkGameFinish();

    if (isWin) {
      input.value = '';
      if (isFinished) {
        setTimeout(() => {
          LevelView.finishGame();
        }, 1000);
      }
    }
    if (this.inputBtn) InputEnter.setAnimationTimeout(this.inputBtn, 'enter', 100);
  }

  private defineWinOrLoseSelector(selector: string): boolean {
    const table = document.querySelector('.table__surface');
    if (!table) return false;
    if (selector.includes('.move')) {
      this.addLoseAnimation([]);
      return false;
    }

    const existElems = InputEnter.getExistElem(selector, table);
    const isTrueSelector = InputEnter.checkTrueSelector(existElems, table);

    if (existElems.length && isTrueSelector) {
      this.switchLevelAfterWin(existElems);
      return true;
    }
    this.addLoseAnimation(existElems);
    return false;
  }

  private switchLevelAfterWin(existElems: Element[]): void {
    const curLevel = this.levelView.getCurLevel();
    const listLevels = this.levelView.getLevelsList();
    const curListLevel = listLevels[curLevel];
    curListLevel.classList.add('level_completed');
    InputEnter.setAnimationTimeout(existElems, 'clean', 1000);

    this.completedLevels.push(curLevel);
    const levelsSet = new Set(this.completedLevels);
    this.completedLevels = Array.from(levelsSet);

    setTimeout(() => {
      this.levelView.setCurLevel();
    }, 1000);
  }

  private addLoseAnimation(arrElems: Element[]): void {
    if (arrElems.length) {
      InputEnter.setAnimationTimeout(arrElems, 'shake', 500);
    } else if (this.inputView) {
      InputEnter.setAnimationTimeout(this.inputView, 'shake', 500);
    }
  }

  private static setAnimationTimeout(elem: Element[] | Element, anim: string, time: number): void {
    if (elem instanceof Array) {
      elem.forEach((el) => el.classList.add(anim));
      setTimeout(() => elem.forEach((el) => el.classList.remove(anim)), time);
    } else {
      elem.classList.add(anim);
      setTimeout(() => elem.classList.remove(anim), time);
    }
  }

  private static checkTrueSelector(elems: Element[], table: Element): boolean {
    const isFindedTrue = elems.every((elem) => elem.classList.contains('move'));
    const allFinded = table.querySelectorAll('.move');
    return allFinded.length === elems.length && isFindedTrue;
  }

  private static getExistElem(selector: string, table: Element): Element[] {
    if (!selector) return [];
    return Array.from(table.querySelectorAll(selector));
  }

  private setLevelsStatus(): void {
    const listLevels = this.levelView.getLevelsList();
    this.completedLevels.forEach((lvl) => listLevels[lvl].classList.add('level_completed'));
    this.helpedLevels.forEach((lvl) => listLevels[lvl].classList.add('level_helped'));
  }

  private saveLevels(): void {
    const completedLevels = JSON.stringify(this.completedLevels);
    localStorage.setItem('completedLevels', completedLevels);
    const helpedLevels = JSON.stringify(this.helpedLevels);
    localStorage.setItem('helpedLevels', helpedLevels);
  }

  public checkGameFinish(): boolean {
    const listLevels = this.levelView.getLevelsList();
    if (listLevels.length === this.completedLevels.length) return true;
    return false;
  }

  public resetLevels(): void {
    const listLevels = this.levelView.getLevelsList();
    listLevels.forEach((lvl) => {
      lvl.classList.remove('level_completed');
      lvl.classList.remove('level_helped');
    });
    this.completedLevels = [];
    this.helpedLevels = [];
  }

  public addHelpedLevel(num: number): void {
    this.helpedLevels.push(num);
    const levelsSet = new Set(this.helpedLevels);
    this.helpedLevels = Array.from(levelsSet);
    const listLevels = this.levelView.getLevelsList();
    this.helpedLevels.forEach((lvl) => listLevels[lvl].classList.add('level_helped'));
  }

  private static focusInput(input: HTMLInputElement): void {
    input.focus();
  }
}
