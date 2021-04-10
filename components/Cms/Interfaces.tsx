export interface InitNodeInterface {
  id: string;
  node_id: string;
  value: any;
  options: any;
  nodes?: InitNodeInterface[];
}

export interface SectionInterface {
  id: string;
  label: string;
  nodes: InitNodeInterface[]
}

export interface SectionsInterface extends Array<SectionInterface>{}
