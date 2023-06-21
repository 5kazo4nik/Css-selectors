// Data Levels types
type Tag = 'plate' | 'bento' | 'apple' | 'orange' | 'pickle';
type Status = 'small' | 'move' | 'fancy';

export interface ILevelItem {
  readonly tag: Tag;
  readonly status?: Status[];
  readonly id?: string;
  readonly innerItem?: ILevelItem[];
  readonly textOpen: string;
  readonly textClose?: string;
}

export interface ILevel {
  readonly item: ILevelItem[];
  readonly answer: string;
}
