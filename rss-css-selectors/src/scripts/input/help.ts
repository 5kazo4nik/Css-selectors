import { LEVELS } from '../data/levels';
import { InputHightlight } from '../view/inputHightlight';
import { LevelView } from '../view/levelView';
import { InputEnter } from './input';

export class Help {
  private helpBtn = document.querySelector('.help-btn');
  private input = document.querySelector('.field__input');

  // eslint-disable-next-line max-len
  constructor(private levelViewer: LevelView, private inputEnter: InputEnter, private inputHightlight: InputHightlight) {}

  public bindEvents(): void {
    if (this.helpBtn) {
      this.helpBtn.addEventListener('click', this.setTrueSelector.bind(this));
    }
  }

  private async setTrueSelector(): Promise<void> {
    const input = this.input;
    if (!(input instanceof HTMLTextAreaElement)) return;
    input.value = '';
    const curLevel = this.levelViewer.getCurLevel();
    const trueSelector = LEVELS[curLevel].answer;

    const chars = trueSelector.split('');
    let index = 0;
    input.disabled = true;

    const addNextChar = (): void => {
      console.log(index >= chars.length - 1);
      if (index >= chars.length - 1) {
        input.disabled = false;
        InputEnter.focusInput(input);
      }
      if (index >= chars.length) return;
      input.value += chars[index];
      index += 1;
      if (index < chars.length) {
        setTimeout(addNextChar, 100);
      }
      InputEnter.resizeInput(input);
      this.inputHightlight.colorText();
    };
    addNextChar();
    this.inputEnter.addHelpedLevel(curLevel);
  }
}
