import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { InitNodeInterface } from '../Interfaces';
import { Item, items } from '.';
import { DropSectionInterface } from './NodeInterface';

interface SectionsInterface {
  id: string;
  nodes: Array<any>;
}

function findNode(id: string): any {
  const found = items.find((item: Item) => (item.id === id));

  if (found) {
    return found.node;
  }

  return (<div>There was an error.</div>);
}

const Section = styled.div`
  padding: 1em;
  background: blue;
  margin-bottom: 1em;

`;

export default function DropSection({
  display, id: sectionId, value: sectionValue, options: sectionOptions,
}: DropSectionInterface) {
  if (display === 'preview') {
    return (<div>Add Drop section</div>);
  }

  if (display === 'edit') {
    return (
      <Droppable droppableId={sectionId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
          >
            <div>xxxx</div>
            {Array.isArray(sectionValue) && sectionValue.map(({
              id, value, options, node_id,
            }: InitNodeInterface, index) => (
              <Draggable
                key={id}
                draggableId={id}
                index={index}
              >
                {(providedDrag, snapshotDrag) => (
                  <div
                    ref={providedDrag.innerRef}
                    {...providedDrag.draggableProps}
                    {...providedDrag.dragHandleProps}
                  >
                    {React.createElement(findNode(node_id), {
                      display: 'edit', id, value, options,
                    })}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}
