export interface BaseNodeInterface<T = any> {
  display: 'preview'|'edit'|'page';
  id: string;
  value: T;
  options: any;
}

export interface LineNodeInterface extends BaseNodeInterface {}
export interface DropSectionInterface extends BaseNodeInterface {
}

export interface BaseItem {
  id: string;
  node_id: string;
}
