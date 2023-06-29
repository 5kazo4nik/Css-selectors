import { burgerListener, removeClass, toggleClass } from '../scripts/burger/burger';

const btnMock = document.createElement('button');
btnMock.classList.add('burger');
const menuMock = document.createElement('div');
menuMock.classList.add('progress');

const eventMock = {
  target: btnMock,
};

document.querySelector = jest.fn().mockImplementation((selector) => {
  if (selector === '.burger') {
    return btnMock;
  } else if (selector === '.progress') {
    return menuMock;
  }
});

afterEach(() => {
  eventMock.target = btnMock;
  btnMock.classList.remove('btn_active');
  menuMock.classList.remove('progress_active');
});

describe('Test func toggleClass', () => {
  test('should toogle "burger_active" class on btn and "progress_active" class on menu', () => {
    toggleClass(btnMock, menuMock);
    expect(btnMock.classList.contains('burger_active')).toBe(true);
    expect(menuMock.classList.contains('progress_active')).toBe(true);
    toggleClass(btnMock, menuMock);
    expect(btnMock.classList.contains('burger_active')).toBe(false);
    expect(menuMock.classList.contains('progress_active')).toBe(false);
  });
});

describe('Test func removeClass', () => {
  test('should remove "burger_active" class on btn and "progress_active" class on menu', () => {
    btnMock.classList.add('burger_active');
    menuMock.classList.add('progress_active');
    removeClass(btnMock, menuMock);
    expect(btnMock.classList.contains('burger_active')).toBe(false);
    expect(menuMock.classList.contains('progress_active')).toBe(false);
  });
});

describe('Test func burgerListner', () => {
  test('should call func toggleClass if event.target has class "burger"', () => {
    burgerListener(eventMock);
    expect(btnMock.classList.contains('burger_active')).toBe(true);
    expect(menuMock.classList.contains('progress_active')).toBe(true);
    burgerListener(eventMock);
    expect(btnMock.classList.contains('burger_active')).toBe(false);
    expect(menuMock.classList.contains('progress_active')).toBe(false);
  });

  test('should call func removeClass if closest elem has .level, main, or .progress__reset classes', () => {
    const levelMock = document.createElement('div');
    levelMock.classList.add('level');
    btnMock.classList.add('burger_active');
    menuMock.classList.add('progress_active');
    eventMock.target = levelMock;

    burgerListener(eventMock);
    expect(btnMock.classList.contains('burger_active')).toBe(false);
    expect(menuMock.classList.contains('progress_active')).toBe(false);

    const mainMock = document.createElement('main');
    btnMock.classList.add('burger_active');
    menuMock.classList.add('progress_active');
    eventMock.target = mainMock;

    burgerListener(eventMock);
    expect(btnMock.classList.contains('burger_active')).toBe(false);
    expect(menuMock.classList.contains('progress_active')).toBe(false);

    const resetMock = document.createElement('div');
    resetMock.classList.add('progress__reset');
    btnMock.classList.add('burger_active');
    menuMock.classList.add('progress_active');
    eventMock.target = resetMock;

    burgerListener(eventMock);
    expect(btnMock.classList.contains('burger_active')).toBe(false);
    expect(menuMock.classList.contains('progress_active')).toBe(false);
  });

  test('should not remove classes if element is not true', () => {
    const falseElem = document.createElement('div');
    falseElem.classList.add('false-selector');
    eventMock.target = falseElem;
    btnMock.classList.add('burger_active');
    menuMock.classList.add('progress_active');

    burgerListener(eventMock);
    expect(btnMock.classList.contains('burger_active')).toBe(true);
    expect(menuMock.classList.contains('progress_active')).toBe(true);
  });
});
