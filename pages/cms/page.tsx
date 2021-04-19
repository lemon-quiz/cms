import React, { useEffect, useState } from 'react';

import NodeWrapper from '../../components/cms/nodes/NodeWrapper';
import Parser from '../../components/cms/parser';
import template from '../../components/cms/templates/index';

const data = [
  {
    name: 'meta',
    type: 'complex',
    uuid: '2a4454b5-73f3-48b8-8226-38a0a409466e2',
    children: [
      {
        type: 'line',
        name: 'page_title',
        value: 1,
        multiple: true,
        uuid: '2a4454b5-73f3-48b8-8226-38a0a409466e1',
        validator: 'isEmail',
      },
      {
        type: 'radio',
        name: 'radio',
        value: 2,
        uuid: '2a4454b5-73f3-48b8-8226-38a40a409466e',
      },
      {
        type: 'checkbox',
        name: 'checkbox',
        value: 3,
        uuid: '2a4454b5-73f3-48b8-8226-385a0a409466e',
      },
    ],
  },
  {
    name: 'Body',
    type: 'complex',
    uuid: '2a4454b5-73f3-48b8-8226-38a0a6409466e',
    children: [
      {
        type: 'line',
        name: 'page_title',
        uuid: '2a4454b5-73f3-48b8-82276-38a0a409466e',
      },
      {
        type: 'complex',
        name: 'paragraph',
        uuid: '2a4454b5-73f3-48b8-8226-38a08a409466e',
        children: [
          {
            type: 'line',
            name: 'title',
            uuid: '2a4454b5-73f3-48b8-98226-38a0a409466e',
          },
          {
            type: 'line',
            name: 'text',
            uuid: '2a4454b5-731f3-48b8-8226-38a0a409466e',
          },
        ],
      },
    ],
  },
];

export const PageContext = React.createContext(null);

export interface PageContextInterface {
  moveUp: (path: number[], index?: number) => void;
  canMoveUp: (path: number[], index: number, type: string, name: string) => boolean;
  moveDown: (path: number[], index?: number) => void;
  canMoveDown: (path: number[], index: number, type: string, name: string) => boolean;
  canAdd: (path: number[]) => boolean;
  addNode: (path: number[], index?: number) => void;
  canDelete: (path: number[]) => boolean;
  deleteNode: (path: number[]) => void;
  getValue: (id: string, defaultValue: any) => any;
  setValue: (id: string, value: any, errors: any) => void;
}

const parser = new Parser();

export default function page() {
  const [state, setState] = useState([]);

  useEffect(() => {
    parser.loadTemplate(template, data);
    setState(parser.getPage());
  }, []);

  const moveUp = (path: number[], index: number): void => {
    setState(parser.moveUp(path, index));
  };

  const moveDown = (path: number[], index: number): void => {
    setState(parser.moveDown(path, index));
  };

  const canMoveUp = (path: number[], index: number, type: string, name: string): boolean => parser.canMoveUp(path, index, type, name);
  const canMoveDown = (path: number[], index: number, type: string, name: string): boolean => parser.canMoveDown(path, index, type, name);
  const canDelete = (path: number[]): boolean => parser.canDelete(path);
  const canAdd = (path: number[]): boolean => parser.canAdd(path);
  const addNode = (path: number[], index: number): void => {
    setState(parser.addNode(path, index));
  };
  const deleteNode = (path: number[]) => {
    setState(parser.deleteNode(path));
  };
  const setValue = (id: string, value: any, errors: any): void => parser.setValue(id, value, errors);
  const getValue = (id: string, value: any): any => parser.getValue(id, value);

  return (
    <PageContext.Provider value={{
      moveUp,
      canMoveUp,
      moveDown,
      canMoveDown,
      canAdd,
      addNode,
      canDelete,
      deleteNode,
      setValue,
      getValue,
    }}
    >
      {state.map((node, index: number) => (
        <NodeWrapper
          key={node.uuid || node.tuuid}
          index={index}
          node={node}
          path={[index]}
          length={state.length}
        />
      ))}
    </PageContext.Provider>
  );
}
