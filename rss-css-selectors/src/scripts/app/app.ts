import { setBurgerListener } from '../burger/burger';
import { Help } from '../input/help';
import { InputEnter } from '../input/input';
import { LevelView } from '../view/levelView';
import { Reset } from '../view/reset';

export class App {
  private LevelViewer = new LevelView();
  private InputEnter = new InputEnter(this.LevelViewer);
  private Reset: Reset;
  private Help = new Help(this.LevelViewer, this.InputEnter);

  constructor() {
    const resetLvlFunc = this.InputEnter.resetLevels.bind(this.InputEnter);
    const setLvlFunc = this.LevelViewer.setCurLevel.bind(this.LevelViewer);
    this.Reset = new Reset(resetLvlFunc, setLvlFunc);
  }

  public build(): void {
    this.Reset.bindEvents();
    this.Help.bindEvents();
    setBurgerListener();
  }
}
