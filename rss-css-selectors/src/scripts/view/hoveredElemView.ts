type Callback = (elems: Element[], tableItem: HTMLElement, helperText: string) => void;

export class HoveredElemView {
  constructor(private tableElements: Element[], private codeElements: Element[]) {
    this.bindEvents();
  }

  private bindEvents(): void {
    document.addEventListener('mouseover', this.hoverListner.bind(this));
  }

  private hoverListner(e: MouseEvent): void {
    if (e.relatedTarget instanceof Element) {
      this.setRelatedHover(e.relatedTarget, HoveredElemView.removeHightlight);
    }

    if (e.target instanceof Element) {
      this.setRelatedHover(e.target, HoveredElemView.setHightlight);
    }
  }

  private setRelatedHover(target: Element, callback: Callback): void {
    const index = this.defineIndex(target);
    if (typeof index === 'number') {
      const relatedElems = this.getRelatedElems(index);
      const tableItem = relatedElems[0];
      const nodes = Array.from(relatedElems[1].childNodes);
      const helperText = HoveredElemView.getTextNodes(nodes);

      if (helperText && tableItem instanceof HTMLElement) {
        callback(relatedElems, tableItem, helperText);
      }
    }
  }

  private defineIndex(target: Element): number | void {
    let index: number | undefined;
    if (this.tableElements.includes(target)) index = this.tableElements.indexOf(target);
    if (this.codeElements.includes(target)) index = this.codeElements.indexOf(target);
    return index;
  }

  private getRelatedElems(index: number): Element[] {
    const arr: Element[] = [];
    arr.push(this.tableElements[index]);
    arr.push(this.codeElements[index]);
    return arr;
  }

  private static setHightlight(elems: Element[], tableItem: HTMLElement, helperText: string): void {
    HoveredElemView.setHelper(tableItem, helperText);
    elems.forEach((el) => el.classList.add('hovered'));
  }

  private static removeHightlight(elems: Element[]): void {
    HoveredElemView.removeHelper();
    elems.forEach((el) => el.classList.remove('hovered'));
  }

  private static setHelper(tableItem: HTMLElement, helperText: string): void {
    const helper = document.querySelector('.helper');
    if (helper instanceof HTMLElement) {
      const tableItemRect = tableItem.getBoundingClientRect();
      const leftItemPos = tableItemRect.left;
      const topItemPos = tableItemRect.top;
      const halfWidth = tableItem.clientWidth / 2;
      helper.style.left = `${leftItemPos + halfWidth}px`;
      helper.style.top = `${topItemPos - 60}px`;
      helper.textContent = helperText;
      helper.style.display = 'block';
    }
  }

  private static removeHelper(): void {
    const helper = document.querySelector('.helper');
    if (helper instanceof HTMLElement) helper.style.display = 'none';
  }

  private static getTextNodes(nodes: ChildNode[]): string {
    return nodes.reduce((acc, node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return acc + node.textContent;
      }
      return acc;
    }, '');
  }

  public updateTableElems(elems: Element[]): void {
    this.tableElements = elems;
  }

  public updateCodeElems(elems: Element[]): void {
    this.codeElements = elems;
  }
}
