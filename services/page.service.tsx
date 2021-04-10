import { BehaviorSubject, Observable } from 'rxjs';

import {
  InitNodeInterface,
  SectionsInterface,
} from '../components/Cms/Interfaces';

const pageData: SectionsInterface = [
  {
    id: '95eaf3ce-711e-4afd-827e-f465562f4a7c',
    label: 'Section 1',
    nodes: [
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7106',
        value: 'Dat is een Header x',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7101',
        value: 'Dat is een Header y',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7102',
        value: 'Dat is een Header z',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7105',
        value: 'Dat is een Header d',
        options: {},
      },
    ],
  },
  {
    id: '95eaf3ce-711e-4afd-827e-f465562f4ad22d',
    label: 'Section 2',
    nodes: [
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe713302',
        value: 'Dat is een Header 4',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe744103',
        value: 'Dat is een Header 3',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68b55fe7104',
        value: 'Dat is een Header 2',
        options: {},
      },
      {
        node_id: 'DROP_SECTION',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bf66e7sss',
        value: [
          {
            node_id: 'LINE',
            id: 'dc0850b6-54d1-4c37-a13f-51f68bfe744122',
            value: 'Dat is een sub-Header 3',
            options: {},
          },
          {
            node_id: 'LINE',
            id: 'dc0850b6-54d1-4c37-a13f-51f68b55fe7104222',
            value: 'Dat is een sub-Header 2',
            options: {},
          },
        ],
        options: {},
      },
    ],
  },

];

export interface NodeUpdatesInterface {
  [key: string]: {
    id: string;
    value: any;
    options?: any;
  }
}

export default class PageService {
  private internalUpdates = new BehaviorSubject<NodeUpdatesInterface>({});

  private internalPage = new BehaviorSubject<SectionsInterface>(pageData);

  public get updates(): Observable<NodeUpdatesInterface> {
    return this.internalUpdates.asObservable();
  }

  public get page(): Observable<SectionsInterface> {
    return this.internalPage.asObservable();
  }

  public get currentUpdate(): NodeUpdatesInterface {
    return this.internalUpdates.getValue();
  }

  public get currentPage(): SectionsInterface {
    return this.internalPage.getValue();
  }

  public setPage(data: SectionsInterface) {
    this.internalPage.next(data);
  }

  public update(id: string, value: any, options?: any): void {
    const updates = this.currentUpdate;

    updates[id] = { id, value, options };
    this.internalUpdates.next(updates);
  }

  /**
   * Clear the list with updates
   */
  public clearUpdates() {
    this.internalUpdates.next({});
  }

  /**
   * Merge updates with the page object
   */
  public merge() {
    const newPage = this.walker(this.currentPage, this.currentUpdate);

    this.internalPage.next(newPage);
    this.internalUpdates.next({});

    console.log(newPage);
  }

  private walker(data: SectionsInterface, updates) {
    return data.map((section) => {
      const tmp = section;

      if (tmp.nodes.length) {
        tmp.nodes = this.nodesWalker(tmp.nodes, updates);
      }

      if (updates[section.id]) {
        return {
          ...tmp,
          ...updates[tmp.id],
        };
      }

      return section;
    });
  }

  private nodesWalker(nodes: InitNodeInterface[], updates) {
    return nodes.map((node) => {
      const tmpNode = node;

      if (node.nodes) {
        tmpNode.nodes = this.nodesWalker(tmpNode.nodes, updates);
      }

      if (updates[node.id]) {
        return {
          ...tmpNode,
          ...updates[tmpNode.id],
        };
      }
      return tmpNode;
    });
  }
}
