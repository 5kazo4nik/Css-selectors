export class Reset {
  private resetBtn = document.querySelector('.progress__reset');

  constructor(private resetLevels: () => void, private setLevel: (n?: number) => void) {}

  public bindEvents(): void {
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', this.reset.bind(this));
    }
  }

  private reset(): void {
    this.resetLevels();
    this.setLevel(0);
  }
}
