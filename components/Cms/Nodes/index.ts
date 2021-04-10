import DropSection from './DropSection';
import Line from './Line';

export interface Item {
  id: string;
  node: any;
  value?: any;
  options?: any;
}

export const items: Array<Item> = [
  {
    id: 'LINE',
    node: Line,
  },
  {
    id: 'DROP_SECTION',
    node: DropSection,
  },
];
