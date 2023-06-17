import '../sass/styles.scss';
import { setBurgerListener } from './burger/burger';
import { InputEnter } from './input/input';
import { LevelView } from './levelSelect/levelView';

const levelViewer = new LevelView();
const inputEnter = new InputEnter(levelViewer);

setBurgerListener();
