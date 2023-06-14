import { ILevel } from './types';

const LEVEL1: ILevel = {
  item: [
    {
      tag: 'plate',
      status: ['move'],
      textOpen: '&lt;plate /&gt;',
    },
    {
      tag: 'plate',
      status: ['move'],
      textOpen: '&lt;plate /&gt;',
    },
  ],
  answer: 'plate',
};

const LEVEL2: ILevel = {
  item: [
    {
      tag: 'bento',
      status: ['move'],
      textOpen: '&lt;bento /&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate /&gt;',
    },
    {
      tag: 'bento',
      status: ['move'],
      textOpen: '&lt;bento /&gt;',
    },
  ],
  answer: 'bento',
};

const LEVEL3: ILevel = {
  item: [
    {
      tag: 'plate',
      status: ['move', 'fancy'],
      textOpen: '&lt;plate class="fancy" /&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate /&gt;',
    },
    {
      tag: 'bento',
      textOpen: '&lt;bento /&gt;',
    },
  ],
  answer: '.fancy',
};

const LEVEL4: ILevel = {
  item: [
    {
      tag: 'bento',
      textOpen: '&lt;bento /&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move'],
          textOpen: '&lt;apple /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'apple',
      textOpen: '&lt;apple /&gt;',
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
          textOpen: '&lt;apple /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'plate',
      status: ['fancy'],
      innerItem: [
        {
          tag: 'pickle',
          status: ['move'],
          textOpen: '&lt;pickle /&gt;',
        },
      ],
      textOpen: '&lt;plate class="fancy"&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '&lt;pickle&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
  ],
  answer: '.fancy pickle',
};

const LEVEL6: ILevel = {
  item: [
    {
      tag: 'apple',
      textOpen: '&lt;apple /&gt;',
    },
    {
      tag: 'apple',
      status: ['small', 'move'],
      textOpen: '&lt;apple class="small" /&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move', 'small'],
          textOpen: '&lt;apple class="small" /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
  ],
  answer: '.small',
};

const LEVEL7: ILevel = {
  item: [
    {
      tag: 'apple',
      textOpen: '&lt;apple /&gt;',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '&lt;apple class="small" /&gt;',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'orange',
          textOpen: '&lt;orange /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
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
          textOpen: '&lt;orange /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'orange',
      status: ['small'],
      textOpen: '&lt;orange class="small" /&gt;',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'apple',
          status: ['small'],
          textOpen: '&lt;apple class="small" /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['move', 'small'],
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
  ],
  answer: 'bento orange.small',
};

const LEVEL9: ILevel = {
  item: [
    {
      tag: 'pickle',
      status: ['small'],
      textOpen: '&lt;pickle class="small" /&gt;',
    },
    {
      tag: 'pickle',
      textOpen: '&lt;pickle /&gt;',
    },
    {
      tag: 'plate',
      status: ['move'],
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '&lt;pickle /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'bento',
      status: ['move'],
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '&lt;pickle /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'plate',
      status: ['move'],
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '&lt;pickle /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'pickle',
      textOpen: '&lt;pickle /&gt;',
    },
    {
      tag: 'pickle',
      status: ['small'],
      textOpen: '&lt;pickle class="small" /&gt;',
    },
  ],
  answer: 'bento, plate',
};

const LEVEL10: ILevel = {
  item: [
    {
      tag: 'apple',
      status: ['move'],
      textOpen: '&lt;apple /&gt;',
    },
    {
      tag: 'plate',
      status: ['move'],
      innerItem: [
        {
          tag: 'orange',
          status: ['small'],
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'bento',
      status: ['move'],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'bento',
      status: ['move'],
      innerItem: [
        {
          tag: 'orange',
          textOpen: '&lt;orange /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'plate',
      status: ['move', 'fancy'],
      textOpen: '&lt;plate class="fancy"&gt;',
      textClose: '&lt; &gt;',
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
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;plate class="fancy"&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          status: ['move'],
          textOpen: '&lt;pickle /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '&lt;apple /&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move'],
          textOpen: '&lt;apple /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
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
          textOpen: '&lt;apple class="small" /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'apple',
      status: ['move', 'small'],
      textOpen: '&lt;apple class="small" /&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;plate&gt;',
    },
    {
      tag: 'apple',
      status: ['move'],
      textOpen: '&lt;apple /&gt;',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '&lt;apple class="small" /&gt;',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '&lt;apple class="small" /&gt;',
    },
  ],
  answer: 'plate + apple',
};

const LEVEL13: ILevel = {
  item: [
    {
      tag: 'pickle',
      textOpen: '&lt;pickle /&gt;',
    },
    {
      tag: 'bento',
      innerItem: [
        {
          tag: 'orange',
          status: ['small'],
          textOpen: '&lt;orange class="small" /&gt;',
        },
      ],
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'pickle',
      status: ['move', 'small'],
      textOpen: '&lt;pickle class="small" /&gt;',
    },
    {
      tag: 'pickle',
      status: ['move'],
      textOpen: '&lt;pickle /&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          textOpen: '&lt;pickle /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'pickle',
          status: ['small'],
          textOpen: '&lt;pickle class="small" /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
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
              textOpen: '&lt;apple /&gt;',
            },
          ],
          textOpen: '&lt;bento&gt;',
          textClose: '&lt;/bento&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'apple',
          status: ['move'],
          textOpen: '&lt;apple /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'apple',
      textOpen: '&lt;apple /&gt;',
    },
    {
      tag: 'apple',
      status: ['small'],
      textOpen: '&lt;apple class="small" /&gt;',
    },
  ],
  answer: 'plate > apple',
};

const LEVEL15: ILevel = {
  item: [
    {
      tag: 'bento',
      textOpen: '&lt;bento&gt;',
      textClose: '&lt;/bento&gt;',
    },
    {
      tag: 'plate',
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'plate',
      innerItem: [
        {
          tag: 'orange',
          textOpen: '&lt;orange /&gt;',
        },
        {
          tag: 'orange',
          textOpen: '&lt;orange /&gt;',
        },
        {
          tag: 'orange',
          status: ['move'],
          textOpen: '&lt;orange /&gt;',
        },
      ],
      textOpen: '&lt;plate&gt;',
      textClose: '&lt;/plate&gt;',
    },
    {
      tag: 'pickle',
      status: ['small'],
      textOpen: '&lt;pickle class="small" /&gt;',
    },
  ],
  answer: 'orange:first-child',
};

export const LEVELS: Record<number, ILevel> = {
  1: LEVEL1,
  2: LEVEL2,
  3: LEVEL3,
  4: LEVEL4,
  5: LEVEL5,
  6: LEVEL6,
  7: LEVEL7,
  8: LEVEL8,
  9: LEVEL9,
  10: LEVEL10,
  11: LEVEL11,
  12: LEVEL12,
  13: LEVEL13,
  14: LEVEL14,
  15: LEVEL15,
} as const;
