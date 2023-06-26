export class InputHightlight {
  private input = document.querySelector('.field__input');
  private coloredInput = document.querySelector('.field__colored-input');

  constructor() {
    this.bindEvents();
  }

  private bindEvents(): void {
    if (this.input) {
      this.input.addEventListener('input', this.colorText.bind(this));
    }
  }

  public colorText(): void {
    if (this.input instanceof HTMLTextAreaElement && this.coloredInput) {
      const selector = this.input.value;

      let coloredText = '';
      const selectors = selector.split(/([[.# ])/);

      selectors.forEach((part, index) => {
        if (part === '#') coloredText += `<span class="id-selector">${part}</span>`;
        else if (part === '.') coloredText += `<span class="class-selector">${part}</span>`;
        else if (part === '[') coloredText += `<span class="attr-selector">${part}</span>`;
        else if (selectors[index - 1] === '#') coloredText += `<span class="id-selector">${part}</span>`;
        else if (selectors[index - 1] === '.') coloredText += `<span class="class-selector">${part}</span>`;
        else if (selectors[index - 1] === '[') coloredText += `<span class="attr-selector">${part}</span>`;
        else coloredText += `<span class="tag-selector">${part}</span>`;
      });

      this.coloredInput.innerHTML = coloredText;
    }
  }

  public uncolorText(): void {
    if (this.coloredInput) this.coloredInput.innerHTML = '';
  }
}
