import React, { useEffect, useState } from 'react';

import NodeWrapper from '../../components/yucan/nodes/NodeWrapper';
import Parser from '../../components/yucan/parser';
import template from '../../components/yucan/templates/index';

const data = [
  {
    name: 'Meta',
    type: 'complex',
    uuid: '2a4454b5-73f3-48b8-8226-38a0a409466e2',
    children: [
      {
        type: 'line', name: 'page_title', value: 1, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a0a409466e1',
      },
      // {
      //   type: 'line', name: 'page_title', value: 2, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a08a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 21, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a07a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 22, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a60a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-82d26-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a4094s66e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73fu3-48b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a4u09466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454yb5-73f3-48b8-8226-3y8a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454bt5-73f3-48b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48bt8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01ra409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-7r3f3-48b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-7s3f3-48b8-8226-38ae01ad409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73ef3-48b8-8226-38a01ea4094e66e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38ae01ae409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01ea409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48ewb8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-e8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8e-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-7e3f3-48b8-82226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-7e3f3-48b8-8226-38a031a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a0e1a4094d66e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a4w09466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a071a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a5409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-82236-38a01a409466dde3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-734f3-48b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a401a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b38-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-338a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f33-48b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a013a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-348b8-8226-38a031a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-483b8-8226-38a01ass409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a031a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a4309466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-348b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-483b8-8226-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-82326-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-82236-38a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-438b8-8226-38a01qwa409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-438b8-8226-38a01a40946ry6e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a0w1a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38ae01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01wa409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a0esd1a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454sgb5-73f3-48b8-8226-38a0e1a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-3d8a01a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a0s1a409466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a40ds9466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-s73f3-48b8-8226-38a01a40d9466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48b8-8226-38a01a4d09466e3',
      // }, {
      //   type: 'line', name: 'page_title', value: 27, multiple: true, uuid: '2a4454b5-73f3-48bss8-8226-38a0d1a409466e3',
      // },
      {
        type: 'radio', name: 'radio', value: 2, uuid: '2a4454b5-73f3-48b8-8226-38a40a409466e',
      },
      {
        type: 'checkbox', name: 'checkbox', value: 3, uuid: '2a4454b5-73f3-48b8-8226-385a0a409466e',
      },
    ],
  },
  {
    name: 'Body',
    type: 'complex',
    uuid: '2a4454b5-73f3-48b8-8226-38a0a6409466e',
    children: [
      { type: 'line', name: 'page_title', uuid: '2a4454b5-73f3-48b8-82276-38a0a409466e' },
      {
        type: 'complex',
        name: 'paragraph',
        uuid: '2a4454b5-73f3-48b8-8226-38a08a409466e',
        children: [
          { type: 'line', name: 'title', uuid: '2a4454b5-73f3-48b8-98226-38a0a409466e' },
          { type: 'line', name: 'text', uuid: '2a4454b5-731f3-48b8-8226-38a0a409466e' },
        ],
      },
    ],
  },
];

export const PageContext = React.createContext(null);

export interface PageContextInterface {
  moveUp: (path: Array<string | number>, index?: number) => void;
  canMoveUp: (path: Array<string | number>, index: number, type: string, name: string) => boolean;
  moveDown: (path: Array<string | number>, index?: number) => void;
  canMoveDown: (path: Array<string | number>, index: number, type: string, name: string) => boolean;
  canAdd: (path: Array<string | number>) => boolean;
  addNode: (path: Array<string | number>, index?: number) => void;
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
  const canAdd = (path: number[]): boolean => parser.canAdd(path);
  const addNode = (path: number[], index: number): void => {
    setState(parser.addNode(path, index));
  };

  return (
    <PageContext.Provider value={{
      moveUp, canMoveUp, moveDown, canMoveDown, canAdd, addNode,
    }}
    >
      {state.map((node, index: number) => <NodeWrapper key={node.uuid || node.tuuid} index={index} node={node} path={[index]} length={state.length} />)}
    </PageContext.Provider>
  );
}
