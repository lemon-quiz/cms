import { Dispatch, useEffect, useState } from 'react';

import { SectionsInterface } from './Interfaces';

const page: SectionsInterface = [
  {
    id: '95eaf3ce-711e-4afd-827e-f465562f4a7c',
    label: 'Section 1',
    nodes: [
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7106',
        value: 'Dat is een Header',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7101',
        value: 'Dat is een Header',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7102',
        value: 'Dat is een Header',
        options: {},
      },
      {
        node_id: 'LINE',
        id: 'dc0850b6-54d1-4c37-a13f-51f68bfe7105',
        value: 'Dat is een Header',
        options: {},
      },
    ],
  },
];
/**
 * @deprecated This is not used, but could be
 */
export default function usePageState(): [SectionsInterface, Dispatch<any>] {
  const [state, setState] = useState(page);

  useEffect(() => {
    setState(page);
  }, []);

  return [state, setState];
}
