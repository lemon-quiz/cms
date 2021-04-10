import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { Item, items } from './Nodes';

export default function NodeList() {
  return (
    <Droppable
      droppableId="nodeList"
      isDropDisabled
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          {items.map((item: Item, index: number) => (
            <Draggable
              key={item.id}
              draggableId={item.id}
              index={index}
            >
              {(provided2, snapshot2) => (
                <>
                  <div
                    ref={provided2.innerRef}
                    {...provided2.draggableProps}
                    {...provided2.dragHandleProps}
                    style={
                      provided2.draggableProps
                        .style
                    }
                  >
                    {React.createElement(item.node, { display: 'preview' })}
                  </div>
                  {snapshot2.isDragging && (
                    <div>
                      {React.createElement(item.node, { display: 'preview' })}
                    </div>
                  )}
                </>
              )}
            </Draggable>
          ))}
          <div style={{ display: 'none' }}>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
