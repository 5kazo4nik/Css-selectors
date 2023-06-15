export abstract class ElementCreator {
  protected abstract buildElement(): void;

  protected abstract addStatus(tableElem?: HTMLElement): HTMLElement | void;

  protected abstract appendElem(parent?: HTMLElement): void;

  public abstract getElement(): HTMLElement;
}
