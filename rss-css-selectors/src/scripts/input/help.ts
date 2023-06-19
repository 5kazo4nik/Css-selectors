import { LEVELS } from '../data/levels';
import { LevelView } from '../view/levelView';
import { InputEnter } from './input';

export class Help {
  private helpBtn = document.querySelector('.help-btn');

  constructor(private levelViewer: LevelView, private inputEnter: InputEnter) {}

  public bindEvents(): void {
    if (this.helpBtn) {
      this.helpBtn.addEventListener('click', this.setTrueSelector.bind(this));
    }
  }

  private async setTrueSelector(): Promise<void> {
    const input = document.querySelector('.field__input');
    if (!(input instanceof HTMLInputElement)) return;
    input.value = '';
    const curLevel = this.levelViewer.getCurLevel();
    const trueSelector = LEVELS[curLevel].answer;

    const chars = trueSelector.split('');
    let index = 0;

    const addNextChar = (): void => {
      if (index >= chars.length) return;
      input.value += chars[index];
      index += 1;
      if (index < chars.length) {
        setTimeout(addNextChar, 100);
      }
    };
    addNextChar();
    this.inputEnter.addHelpedLevel(curLevel);
  }
}
