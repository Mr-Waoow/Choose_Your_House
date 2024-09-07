export class Methods {
  //Select button clicked.
  selecteBtn(evt: Event): boolean {
    const element = evt.currentTarget as HTMLElement;
    const elementParent = element.parentNode as HTMLElement;
    const targetElements = elementParent.getElementsByTagName('button');
    this.removeClass(targetElements, 0, 'active');
    element.classList.add('active');
    return true;
  }
  //Remove class from elements.
  removeClass(
    targetElements: HTMLCollectionOf<Element>,
    i: number = 0,
    className: string
  ): number {
    const n = targetElements.length;
    if (i < n) {
      const currentElement = targetElements[i] as HTMLElement;
      currentElement.classList.remove(className);
      i++;
      this.removeClass(targetElements, i, className);
    } else {
      return 0;
    }
    return 0;
  }
}
