import '../sass/styles.scss';
import { setBurgerListener } from './burger/burger';
import { ILevel } from './data/types';
import { CodeElementCreator } from './util/createCodeElements';
import { TableElementCreator } from './util/createTableElements';

const LEVEL5: ILevel = {
  item: [
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          textOpen: '<apple />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'plate',
      status: ['fancy'],
      innerItem: [
        {
          tag: 'pickle',
          status: ['move'],
          textOpen: '<pickle />',
        },
      ],
      textOpen: '<plate class="fancy">',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '<pickle>',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
  ],
  answer: '.fancy pickle',
};

setBurgerListener();

const table = document.querySelector('.table__surface');
if (table) {
  TableElementCreator.appendInnerElements(table, LEVEL5.item);
}

const field = document.querySelector('.field__view');
if (field) {
  CodeElementCreator.appendInnerElements(field, LEVEL5.item);
}
