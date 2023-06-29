export function toggleClass(btn: Element, menu: Element): void {
  btn.classList.toggle('burger_active');
  menu.classList.toggle('progress_active');
}

export function removeClass(btn: Element, menu: Element): void {
  btn.classList.remove('burger_active');
  menu.classList.remove('progress_active');
}

export function burgerListener(e: Event): void {
  const { target } = e;
  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.progress');
  if (!(target instanceof Element)) return;
  if (!burgerBtn || !menu) return;

  if (target.closest('.burger')) {
    toggleClass(burgerBtn, menu);
  }
  if (target.closest('.level') || target.closest('main') || target.closest('.progress__reset')) {
    removeClass(burgerBtn, menu);
  }
}

export function setBurgerListener(): void {
  document.addEventListener('click', burgerListener);
}
