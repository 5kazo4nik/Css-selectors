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
      if (e.relatedTarget.closest('.field__layout')) {
        const codeBlock = e.relatedTarget.closest('div');
        if (codeBlock) this.setRelatedHover(codeBlock, HoveredElemView.removeHover);
      } else {
        this.setRelatedHover(e.relatedTarget, HoveredElemView.removeHover);
      }
    }

    if (e.target instanceof Element) {
      if (e.target.closest('.field__layout')) {
        const codeBlock = e.target.closest('div');
        if (codeBlock) this.setRelatedHover(codeBlock, HoveredElemView.setHover);
      } else {
        this.setRelatedHover(e.target, HoveredElemView.setHover);
      }
    }
  }

  private setRelatedHover(target: Element, callback: Callback): void {
    const index = this.defineIndex(target);
    if (typeof index === 'number') {
      const relatedElems = this.getRelatedElems(index);
      const tableItem = relatedElems[0];
      const helperText = HoveredElemView.getTextNodes(relatedElems[1]);

      if (helperText && tableItem instanceof HTMLElement) {
        callback(relatedElems, tableItem, helperText);
      }
    }
  }

  private static getTextNodes(elem: Element): string {
    const codeElems = Array.from(elem.children).filter((el) => el.tagName === 'CODE');

    return codeElems.reduce((acc, codeElem) => {
      const textChilds = Array.from(codeElem.children);
      return acc + textChilds.reduce((acc2, span) => acc2 + span.textContent, '');
    }, '');
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

  private static setHover(elems: Element[], tableItem: HTMLElement, helperText: string): void {
    HoveredElemView.setHelper(tableItem, helperText);
    elems.forEach((el) => el.classList.add('hovered'));
  }

  private static removeHover(elems: Element[]): void {
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

  public updateTableElems(elems: Element[]): void {
    this.tableElements = elems;
  }

  public updateCodeElems(elems: Element[]): void {
    this.codeElements = elems;
  }
}
