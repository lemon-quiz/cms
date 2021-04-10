import React, { ReactChild, ReactElement } from 'react';
import styled from 'styled-components';

const PlaceHolder = styled.div`
  background-color: green;
  padding: 1em;
`;

const allowDrop = (event) => {
  event.preventDefault();
};

const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
  console.log('start.', { event });
};

const Droppable = ({ children }: {children: () => {}}) => (<div onDragOver={allowDrop} onDrop={console.log}>{children()}</div>);
const Draggable = () => (<div onDragStart={dragStart} draggable>Some content</div>);

export default function DndTest() {
  return (
    <>
      <PlaceHolder>Test</PlaceHolder>
      <Droppable>
        {() => (
          <>
            <div>xxx 1</div>
            <div>xxx 2</div>
            <Draggable />
          </>
        )}
      </Droppable>

    </>
  );
}
