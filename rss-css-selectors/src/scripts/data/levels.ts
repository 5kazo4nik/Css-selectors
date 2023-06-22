import { ILevel } from './types';

const LEVEL1: ILevel = {
  item: [
    {
      tag: 'board',
      status: ['move'],
      textOpen: '<board />',
    },
    {
      tag: 'board',
      status: ['move'],
      textOpen: '<board />',
    },
  ],
  answer: 'board',
};

const LEVEL2: ILevel = {
  item: [
    {
      tag: 'dish',
      textOpen: '<dish />',
    },
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'dish',
          status: ['move'],
          id: 'fancy',
          textOpen: '<dish id="fancy" />',
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
  ],
  answer: '#fancy',
};

const LEVEL3: ILevel = {
  item: [
    {
      tag: 'dish',
      textOpen: '<dish">',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'coconut',
          status: ['move'],
          textOpen: '<coconut />',
        },
      ],
    },
    {
      tag: 'board',
      textOpen: '<board>',
      textClose: '</board>',
      innerItem: [
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
      ],
    },
    {
      tag: 'zucchini',
      textOpen: '<zucchini />',
    },
  ],
  answer: 'dish coconut',
};

const LEVEL4: ILevel = {
  item: [
    {
      tag: 'board',
      textOpen: '<board />',
    },
    {
      tag: 'dish',
      id: 'fancy',
      innerItem: [
        {
          tag: 'peper',
          status: ['move'],
          textOpen: '<peper />',
        },
      ],
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'peper',
          textOpen: '<peper />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'zucchini',
      textOpen: '<zucchini />',
    },
  ],
  answer: '#fancy peper',
};

const LEVEL5: ILevel = {
  item: [
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '<zucchini />',
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'dish',
      id: 'fancy',
      innerItem: [
        {
          tag: 'zucchini',
          status: ['move', 'small'],
          textOpen: '<zucchini class="small" />',
        },
      ],
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '</zucchini>',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'zucchini',
          status: ['move', 'small'],
          textOpen: '<zucchini class="small" />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
  ],
  answer: '.small',
};

const LEVEL6: ILevel = {
  item: [
    {
      tag: 'coconut',
      textOpen: '<coconut />',
    },
    {
      tag: 'peper',
      status: ['small'],
      textOpen: '<peper class="small" />',
    },
    {
      tag: 'dish',
      id: 'fancy',
      innerItem: [
        {
          tag: 'coconut',
          status: ['move', 'small'],
          textOpen: '<coconut class="small" />',
        },
      ],
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'coconut',
          status: ['small'],
          textOpen: '<coconut class="small" />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
  ],
  answer: '#fancy .small',
};

const LEVEL7: ILevel = {
  item: [
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'coconut',
          status: ['small'],
          textOpen: '<coconut class="small" />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'zucchini',
      textOpen: '<zucchini />',
    },
    {
      tag: 'zucchini',
      status: ['move', 'small'],
      textOpen: '<zucchini class="small" />',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '<zucchini />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'board',
      textOpen: '<board>',
      textClose: '</board>',
      innerItem: [
        {
          tag: 'dish',
          textOpen: '<dish>',
          textClose: '</dish>',
          innerItem: [{ tag: 'zucchini', status: ['move', 'small'], textOpen: '<zucchini class="small" />' }],
        },
      ],
    },
  ],
  answer: 'zucchini.small',
};

const LEVEL8: ILevel = {
  item: [
    {
      tag: 'board',
      status: ['move'],
      textOpen: '<board class="move">',
      textClose: '</board>',
      innerItem: [
        {
          tag: 'peper',
          textOpen: '<peper />',
        },
      ],
    },
    {
      tag: 'peper',
      status: ['small'],
      textOpen: '<peper class="small" />',
    },
    {
      tag: 'dish',
      id: 'fancy',
      innerItem: [
        {
          tag: 'zucchini',
          status: ['small'],
          textOpen: '<zucchini class="small" />',
        },
      ],
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '<zucchini />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'coconut',
      status: ['move'],
      textOpen: '<coconut>',
    },
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'coconut',
          status: ['small', 'move'],
          textOpen: '<coconut class="small" />',
        },
      ],
    },
  ],
  answer: 'board, coconut',
};

const LEVEL9: ILevel = {
  item: [
    {
      tag: 'zucchini',
      status: ['small', 'move'],
      textOpen: '<zucchini class="small" />',
    },
    {
      tag: 'dish',
      id: 'fancy',
      status: ['move'],
      textOpen: '<dish id="fancy" />',
    },
    {
      tag: 'board',
      status: ['move'],
      innerItem: [
        {
          tag: 'dish',
          status: ['move'],
          textOpen: '<dish>',
          textClose: '<dish/>',
          innerItem: [{ tag: 'peper', status: ['move'], textOpen: '<peper/>' }],
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'dish',
      status: ['move'],
      innerItem: [
        {
          tag: 'coconut',
          status: ['move', 'small'],
          textOpen: '<coconut class="small" />',
        },
        {
          tag: 'coconut',
          status: ['move', 'small'],
          textOpen: '<coconut class="small" />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      status: ['move'],
      textOpen: '<dish />',
    },
    {
      tag: 'coconut',
      status: ['move'],
      textOpen: '<coconut />',
    },
    {
      tag: 'zucchini',
      status: ['move'],
      textOpen: '<zucchini />',
    },
  ],
  answer: '*',
};

const LEVEL10: ILevel = {
  item: [
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'peper',
          status: ['small'],
          textOpen: '<peper class="small" />',
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'zucchini',
      status: ['move'],
      textOpen: '<zucchini />',
    },
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '<zucchini />',
        },
      ],
    },
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'dish',
          textOpen: '<dish />',
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'coconut',
      status: ['move'],
      textOpen: '<coconut />',
    },
  ],
  answer: 'board + *',
};

const LEVEL11: ILevel = {
  item: [
    {
      tag: 'dish',
      id: 'fancy',
      innerItem: [
        {
          tag: 'peper',
          textOpen: '<peper />',
        },
      ],
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
    },
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '<zucchini />',
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'peper',
      status: ['small', 'move'],
      textOpen: '<peper class="small" />',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'peper',
          textOpen: '<peper />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'peper',
      status: ['move'],
      textOpen: '<peper />',
    },
  ],
  answer: 'board ~ peper',
};

const LEVEL12: ILevel = {
  item: [
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'dish',
          textOpen: '<dish>',
          textClose: '</dish>',
          innerItem: [
            {
              tag: 'coconut',
              status: ['move'],
              textOpen: '<coconut />',
            },
          ],
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'coconut',
      status: ['small'],
      textOpen: '<coconut class="small" />',
    },
    {
      tag: 'coconut',
      textOpen: '<coconut />',
    },
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '<dish/>',
      innerItem: [
        {
          tag: 'coconut',
          status: ['move', 'small'],
          textOpen: '<coconut />',
        },
      ],
    },
    {
      tag: 'board',
      textOpen: '<board>',
      textClose: '<board/>',
      innerItem: [
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
      ],
    },
  ],
  answer: 'dish > coconut',
};

const LEVEL13: ILevel = {
  item: [
    {
      tag: 'zucchini',
      textOpen: '<zucchini />',
    },
    {
      tag: 'board',
      innerItem: [
        {
          tag: 'coconut',
          status: ['move'],
          textOpen: '<coconut />',
        },
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
      ],
      textOpen: '<board>',
      textClose: '</board>',
    },
    {
      tag: 'peper',
      status: ['small'],
      textOpen: '<peper class="small" />',
    },
    {
      tag: 'coconut',
      textOpen: '<coconut />',
    },
    {
      tag: 'dish',
      innerItem: [
        {
          tag: 'coconut',
          status: ['small', 'move'],
          textOpen: '<coconut class="small" />',
        },
        {
          tag: 'coconut',
          status: ['small'],
          textOpen: '<coconut class="small" />',
        },
      ],
      textOpen: '<dish>',
      textClose: '</dish>',
    },
    {
      tag: 'dish',
      id: 'fancy',
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'coconut',
          status: ['small', 'move'],
          textOpen: '<coconut class="small" />',
        },
        {
          tag: 'coconut',
          status: ['small'],
          textOpen: '<coconut class="small" />',
        },
        {
          tag: 'coconut',
          status: ['small'],
          textOpen: '<coconut class="small" />',
        },
      ],
    },
  ],
  answer: 'board coconut:first-child, dish coconut:first-child',
};

const LEVEL14: ILevel = {
  item: [
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'zucchini',
          textOpen: '<zucchini />',
        },
      ],
    },
    {
      tag: 'dish',
      id: 'fancy',
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'coconut',
          status: ['move', 'small'],
          textOpen: '<coconut class="small" />',
        },
      ],
    },
    {
      tag: 'dish',
      id: 'fancy',
      textOpen: '<dish>',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
      ],
    },
    {
      tag: 'dish',
      id: 'fancy',
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'zucchini',
          status: ['move'],
          textOpen: '<zucchini />',
        },
      ],
    },
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
      ],
    },
  ],
  answer: '#fancy *:only-child',
};

const LEVEL15: ILevel = {
  item: [
    {
      tag: 'peper',
      textOpen: '<peper />',
    },
    {
      tag: 'dish',
      textOpen: '<dish>',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'peper',
          status: ['move', 'small'],
          textOpen: '<coconut />',
        },
      ],
    },
    {
      tag: 'board',
      textOpen: '<board>',
      textClose: '</board>',
      innerItem: [
        {
          tag: 'coconut',
          textOpen: '<coconut />',
        },
        {
          tag: 'coconut',
          status: ['move'],
          textOpen: '<coconut />',
        },
      ],
    },
    {
      tag: 'peper',
      textOpen: '<peper />',
    },
    {
      tag: 'dish',
      id: 'fancy',
      status: ['move'],
      textOpen: '<dish id="fancy">',
      textClose: '</dish>',
      innerItem: [
        {
          tag: 'zucchini',
          status: ['move'],
          textOpen: '<zucchini />',
        },
      ],
    },
  ],
  answer: '*:last-child',
};

export const LEVELS: Record<number, ILevel> = {
  0: LEVEL1,
  1: LEVEL2,
  2: LEVEL3,
  3: LEVEL4,
  4: LEVEL5,
  5: LEVEL6,
  6: LEVEL7,
  7: LEVEL8,
  8: LEVEL9,
  9: LEVEL10,
  10: LEVEL11,
  11: LEVEL12,
  12: LEVEL13,
  13: LEVEL14,
  14: LEVEL15,
} as const;
