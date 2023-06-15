import { ILevelItem } from '../data/types';
import { ElementCreator } from './abstractCreator';

export class TableElementCreator extends ElementCreator {
  private element: HTMLElement;

  constructor(private readonly item: ILevelItem) {
    super();
    this.element = document.createElement(this.item.tag);
    this.buildElement();
  }

  protected buildElement(): void {
    this.element = this.addStatus(this.element);
    this.appendElem();
  }

  protected addStatus(tableElem: HTMLElement): HTMLElement {
    const { status } = this.item;
    if (status) {
      status.forEach((stat) => tableElem.classList.add(stat));
    }
    return tableElem;
  }

  protected appendElem(): void {
    const { innerItem } = this.item;
    if (innerItem) {
      TableElementCreator.appendInnerElements(this.element, innerItem);
    }
  }

  public static appendInnerElements(parent: HTMLElement | Element, childItems: ILevelItem[]): void {
    childItems.forEach((item) => {
      const elem = new TableElementCreator(item).getElement();
      parent.append(elem);
    });
  }

  public getElement(): HTMLElement {
    return this.element;
  }
}
