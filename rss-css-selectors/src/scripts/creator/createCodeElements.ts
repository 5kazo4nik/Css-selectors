import { ILevelItem } from '../data/types';
import { ElementCreator } from './abstractCreator';

export class CodeElementCreator extends ElementCreator {
  private code: HTMLElement;

  constructor(private readonly item: ILevelItem) {
    super();
    this.code = document.createElement('div');
    this.buildElement();
  }

  protected buildElement(): void {
    this.addStatus();
    this.appendElem(this.code);
  }

  protected addStatus(): void {
    this.code.textContent = `${this.item.textOpen}\n`;
  }

  protected appendElem(parent: HTMLElement): void {
    const { innerItem, textClose } = this.item;
    if (innerItem && textClose) {
      CodeElementCreator.createInnerElements(parent, innerItem);
      parent.append(`\n${textClose}`);
    }
  }

  protected static createInnerElements(parent: HTMLElement | Element, childs: ILevelItem[]): void {
    childs.forEach((item) => {
      const elem = new CodeElementCreator(item).getElement();
      parent.append(elem);
    });
  }

  public static appendInnerElements(parent: HTMLElement | Element, childItems: ILevelItem[]): void {
    const field = document.createElement('div');
    field.classList.add('field__layout');
    field.textContent = '<div class="table>\n';
    CodeElementCreator.createInnerElements(field, childItems);
    field.append('\n</div>');
    parent.append(field);
  }

  public getElement(): HTMLElement {
    return this.code;
  }
}
