import { setBurgerListener } from '../burger/burger';
import { InputEnter } from '../input/input';
import { LevelView } from '../view/levelView';
import { Reset } from '../view/reset';

export class App {
  private LevelViewer = new LevelView();
  private InputEnter = new InputEnter(this.LevelViewer);
  private Reset: Reset;

  constructor() {
    const resetLvlFunc = this.InputEnter.resetCompledLevels.bind(this.InputEnter);
    const setLvlFunc = this.LevelViewer.setCurLevel.bind(this.LevelViewer);
    this.Reset = new Reset(resetLvlFunc, setLvlFunc);
  }

  // private bindEvents(): void {}
  public build(): void {
    this.Reset.bindEvents();
    setBurgerListener();
  }
}
