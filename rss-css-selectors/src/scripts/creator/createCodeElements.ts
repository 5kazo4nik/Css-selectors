import { ILevelItem } from '../data/types';
import { ElementCreator } from './abstractCreator';

export class CodeElementCreator extends ElementCreator {
  private code: HTMLElement;
  private static elementsArr: HTMLElement[] = [];

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
    const codeElem = CodeElementCreator.getHighlitedCode(`${this.item.textOpen}\n`);
    this.code.append(codeElem);
  }

  protected appendElem(parent: HTMLElement): void {
    const { innerItem, textClose } = this.item;
    if (innerItem && textClose) {
      CodeElementCreator.createInnerElements(parent, innerItem);
      const codeElem = CodeElementCreator.getHighlitedCode(`\n${textClose}`);
      parent.append(codeElem);
    }
  }

  private static createInnerElements(parent: HTMLElement | Element, childs: ILevelItem[]): void {
    childs.forEach((item) => {
      const elem = new CodeElementCreator(item).getElement();
      CodeElementCreator.elementsArr.push(elem);
      parent.append(elem);
    });
  }

  public static appendInnerElements(parent: HTMLElement | Element, childItems: ILevelItem[]): void {
    const field = document.createElement('div');
    field.classList.add('field__layout');

    const preOpen = CodeElementCreator.getHighlitedCode('<div class="table>\n');
    field.append(preOpen);

    CodeElementCreator.createInnerElements(field, childItems);

    const preClose = CodeElementCreator.getHighlitedCode('</div>');
    field.append(preClose);
    parent.append(field);
  }

  private static getHighlitedCode(text: string): Element {
    const code = document.createElement('code');
    code.append(text);
    code.classList.add('prettyprint');
    return code;
  }

  public getElement(): HTMLElement {
    return this.code;
  }

  public static getElementsArr(): HTMLElement[] {
    return CodeElementCreator.elementsArr;
  }

  public static resetElemetsArr(): void {
    CodeElementCreator.elementsArr = [];
  }
}
