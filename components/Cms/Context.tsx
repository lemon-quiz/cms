import { Box, Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { v4 } from 'uuid';

import { ServicesModule } from '../../services/initServices';
import AppContext from '../AppContext';
import { InitNodeInterface, SectionsInterface } from './Interfaces';
import NodeList from './NodeList';
import { items } from './Nodes';
import Sections from './Sections';

const reorder = (list: Array<InitNodeInterface>, startIndex, endIndex): Array<InitNodeInterface> => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function Context() {
  const [page, setPage] = useState<SectionsInterface>([]);
  const { pageService } = useContext<ServicesModule>(AppContext);

  useEffect(() => {
    const destroy = new Subject();

    pageService.page
      .pipe(
        takeUntil(destroy),
      )
      .subscribe((data: SectionsInterface) => {
        setPage(data);
      });

    pageService.updates
      .pipe(
        takeUntil(destroy),
      )
      .subscribe(
        (val) => console.log({ val }),
      );

    return () => {
      destroy.next();
      destroy.complete();
    };
  }, []);

  const onDragEnd = ({ source, destination }: DropResult): void => {
    switch (source.droppableId) {
      case destination.droppableId: {
        const clone = JSON.parse(JSON.stringify(page));
        const index = clone.findIndex((section) => section.id === destination.droppableId);

        clone[index].nodes = reorder(clone[index].nodes, source.index, destination.index);
        pageService.setPage(clone);

        break;
      }
      case 'nodeList': {
        const clone = JSON.parse(JSON.stringify(page));
        const index = clone.findIndex((section) => section.id === destination.droppableId);
        const { id, value, options } = Array.from(items)[source.index];

        const node = {
          node_id: id, value, options, id: v4(),
        };

        clone[index].nodes.splice(destination.index, 0, node);
        pageService.setPage(clone);
      }

      default:
        break;
    }

    // setItems((prevState) => {
    //   prevState.push(
    //     {
    //       id: v4(),
    //       node_id: result.draggableId,
    //     },
    //   );
    //
    //   return prevState;
    // });
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box
          display="flex"
          flexDirection="row"
          p={1}
          m={1}
          bgcolor="background.paper"
        >
          <Box p={1} flexGrow={3} bgcolor="grey.300">
            {page.map((section) => (
              <Sections
                id={section.id}
                key={section.id}
                nodes={section.nodes}
              />
            ))}
          </Box>
          <Box p={1} flexGrow={1} bgcolor="grey.300">
            <NodeList />
          </Box>
        </Box>
      </DragDropContext>
      <Button variant="contained" onClick={() => pageService.merge()}>Default</Button>
    </>
  );
}
