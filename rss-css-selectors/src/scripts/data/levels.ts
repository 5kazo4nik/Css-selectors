import { ILevel } from './types';

const LEVEL1: ILevel = {
  item: [
    {
      tag: 'plate',
      status: ['move'],
      textOpen: '<plate />',
    },
    {
      tag: 'plate',
      status: ['move'],
      textOpen: '<plate />',
    },
  ],
  answer: 'plate',
};

const LEVEL2: ILevel = {
  item: [
    {
      tag: 'bento',
      status: ['move'],
      textOpen: '<bento />',
    },
    {
      tag: 'plate',
      textOpen: '<plate />',
    },
    {
      tag: 'bento',
      status: ['move'],
      textOpen: '<bento />',
    },
  ],
  answer: 'bento',
};

const LEVEL3: ILevel = {
  item: [
    {
      tag: 'plate',
      status: ['move', 'fancy'],
      textOpen: '<plate class="fancy" />',
    },
    {
      tag: 'plate',
      textOpen: '<plate />',
    },
    {
      tag: 'bento',
      textOpen: '<bento />',
    },
  ],
  answer: '.fancy',
};

const LEVEL4: ILevel = {
  item: [
    {
      tag: 'bento',
      textOpen: '<bento />',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move'],
          textOpen: '<apple />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'apple',
      textOpen: '<apple />',
    },
  ],
  answer: 'plate apple',
};

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

const LEVEL6: ILevel = {
  item: [
    {
      tag: 'apple',
      textOpen: '<apple />',
    },
    {
      tag: 'apple',
      status: ['small', 'move'],
      textOpen: '<apple class="small" />',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move', 'small'],
          textOpen: '<apple class="small" />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      textOpen: '<plate>',
      textClose: '</plate>',
    },
  ],
  answer: '.small',
};

const LEVEL7: ILevel = {
  item: [
    {
      tag: 'apple',
      textOpen: '<apple />',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '<apple class="small" />',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '<orange class="small" />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'orange',
          textOpen: '<orange />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '<orange class="small" />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
  ],
  answer: 'orange.small',
};

const LEVEL8: ILevel = {
  item: [
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          textOpen: '<orange />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'orange',
      status: ['small'],
      textOpen: '<orange class="small" />',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '<orange class="small" />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'apple',
          status: ['small'],
          textOpen: '<apple class="small" />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '<orange class="small" />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
  ],
  answer: 'bento orange.small',
};

const LEVEL9: ILevel = {
  item: [
    {
      tag: 'pickle',
      status: ['small'],
      textOpen: '<pickle class="small" />',
    },
    {
      tag: 'pickle',
      textOpen: '<pickle />',
    },
    {
      tag: 'plate',
      status: ['move'],
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '<pickle />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'bento',
      status: ['move'],
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '<pickle />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'plate',
      status: ['move'],
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '<pickle />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'pickle',
      textOpen: '<pickle />',
    },
    {
      tag: 'pickle',
      status: ['small'],
      textOpen: '<pickle class="small" />',
    },
  ],
  answer: 'bento, plate',
};

const LEVEL10: ILevel = {
  item: [
    {
      tag: 'apple',
      status: ['move'],
      textOpen: '<apple />',
    },
    {
      tag: 'plate',
      status: ['move'],
      innerItem: [
        {
          tag: 'orange',
          status: ['small'],
          textOpen: '<orange class="small" />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'bento',
      status: ['move'],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'bento',
      status: ['move'],
      innerItem: [
        {
          tag: 'orange',
          textOpen: '<orange />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'plate',
      status: ['move', 'fancy'],
      textOpen: '<plate class="fancy">',
      textClose: '< >',
    },
  ],
  answer: '*',
};

const LEVEL11: ILevel = {
  item: [
    {
      tag: 'plate',
      status: ['fancy'],
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '<orange class="small" />',
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
          status: ['move'],
          textOpen: '<pickle />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '<apple />',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move'],
          textOpen: '<apple />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
  ],
  answer: 'plate *',
};

const LEVEL12: ILevel = {
  item: [
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'apple',
          status: ['small'],
          textOpen: '<apple class="small" />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'plate',
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'apple',
      status: ['move', 'small'],
      textOpen: '<apple class="small" />',
    },
    {
      tag: 'plate',
      textOpen: '<plate>',
      textClose: '<plate>',
    },
    {
      tag: 'apple',
      status: ['move'],
      textOpen: '<apple />',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '<apple class="small" />',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '<apple class="small" />',
    },
  ],
  answer: 'plate + apple',
};

const LEVEL13: ILevel = {
  item: [
    {
      tag: 'pickle',
      textOpen: '<pickle />',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['small'],
          textOpen: '<orange class="small" />',
        },
      ],
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'pickle',
      status: ['move', 'small'],
      textOpen: '<pickle class="small" />',
    },
    {
      tag: 'pickle',
      status: ['move'],
      textOpen: '<pickle />',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '<pickle />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          status: ['small'],
          textOpen: '<pickle class="small" />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
  ],
  answer: 'pickle ~ pickle',
};

const LEVEL14: ILevel = {
  item: [
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'bento',
          innerItem: [
            {
              tag: 'apple',
              textOpen: '<apple />',
            },
          ],
          textOpen: '<bento>',
          textClose: '</bento>',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move'],
          textOpen: '<apple />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'apple',
      textOpen: '<apple />',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '<apple class="small" />',
    },
  ],
  answer: 'plate > apple',
};

const LEVEL15: ILevel = {
  item: [
    {
      tag: 'bento',
      textOpen: '<bento>',
      textClose: '</bento>',
    },
    {
      tag: 'plate',
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'orange',
          textOpen: '<orange />',
        },
        {
          tag: 'orange',
          textOpen: '<orange />',
        },
        {
          tag: 'orange',
          status: ['move'],
          textOpen: '<orange />',
        },
      ],
      textOpen: '<plate>',
      textClose: '</plate>',
    },
    {
      tag: 'pickle',
      status: ['small'],
      textOpen: '<pickle class="small" />',
    },
  ],
  answer: 'orange:first-child',
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
