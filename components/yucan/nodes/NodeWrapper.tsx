import { Box, Button, IconButton } from '@material-ui/core';
import { AddBox, ArrowDropDown, Delete } from '@material-ui/icons';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { PageContext, PageContextInterface } from '../../../pages/cms/page';
import { NodeType } from '../interfaces/template.interface';

export default function NodeWrapper({
  node,
  index,
  path,
  length,
}: { node: NodeType, index: number, path: Array<string | number>, length: number }) {
  const pageContext = useContext<PageContextInterface>(PageContext);
  const [animate, shouldAnimate] = useState(false);
  const [state, setState] = useState({
    canMoveUp: false,
    canMoveDown: false,
    canAdd: false,
  });

  const moveUp = () => {
    shouldAnimate(false);
    pageContext.moveUp(path);
  };

  const moveDown = () => {
    shouldAnimate(false);
    pageContext.moveDown(path);
  };

  const addNode = () => {
    if (node.uuid) {
      pageContext.addNode(path, index);

      return;
    }

    pageContext.addNode(path);
  };

  useEffect(() => {
    shouldAnimate(true);
    setState({
      canMoveUp: pageContext.canMoveUp(path, index, node.type, node.name),
      canMoveDown: pageContext.canMoveDown(path, index, node.type, node.name),
      canAdd: pageContext.canAdd(path),
    });
  }, [index, length]);

  if (node.tuuid && !state.canAdd) {
    // Do not render template nodes
    return <></>;
  }

  if (node.tuuid && state.canAdd) {
    // Do not render template nodes
    return (
      <Box display="flex" flexDirection="row">
        <Box flex="100%" p={1} m={1} bgcolor="grey.300">
          <Button
            onClick={addNode}
            disabled={!state.canAdd}
            component="span"
            color="primary"
            size="small"
            startIcon={<AddBox />}
          >
            {`Add ${node.name}`}
          </Button>
        </Box>
      </Box>
    );
  }

  if (node.type === 'complex') {
    return (
      <>
        <Box display="flex" flexDirection="row">
          <Box flex="100%" p={1} m={1} bgcolor="grey.300">{node.name}</Box>
          <Box flex="130px" p={1} m={1} mr={1} bgcolor="grey.300">
            {}
            <IconButton onClick={moveUp} disabled={!state.canMoveUp} component="span" color="primary" size="small">
              <ArrowDropUpIcon />
            </IconButton>
            <IconButton onClick={moveDown} disabled={!state.canMoveDown} component="span" color="primary" size="small">
              <ArrowDropDown />
            </IconButton>
            <IconButton onClick={addNode} disabled={!state.canAdd} component="span" color="primary" size="small">
              <AddBox />
            </IconButton>
            <Delete />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box flex="150px" p={1} m={1} bgcolor="grey.100" />
          <Box flex="100%" p={1} pr={0} m={1} mr={0}>
            {node.children.map((childNode, childIndex: number) => (
              <NodeWrapper
                node={childNode}
                index={childIndex}
                key={childNode.uuid || childNode.tuuid}
                path={[...path, childIndex]}
                length={node.children.length}
              />
            ))}
          </Box>
        </Box>
      </>
    );
  }

  return (
    <Box display="flex" flexDirection="row">
      <Box flex="1 0 20%" p={1} m={1}>{node.name}</Box>
      <Box flex="80%" p={1} m={1} bgcolor="grey.400">
        <CSSTransition
          in={animate}
          timeout={3000}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',

          }}
        >
          <div>
            {node.value}
          </div>
        </CSSTransition>
      </Box>
      <Box flex="200px" p={1} m={1} mr={1} bgcolor="grey.300">
        <IconButton onClick={moveUp} disabled={!state.canMoveUp} component="span" color="primary" size="small">
          <ArrowDropUpIcon />
        </IconButton>
        <IconButton onClick={moveDown} disabled={!state.canMoveDown} component="span" color="primary" size="small">
          <ArrowDropDown />
        </IconButton>
        <IconButton onClick={addNode} disabled={!state.canAdd} component="span" color="primary" size="small">
          <AddBox />
        </IconButton>
        <Delete />
      </Box>
    </Box>
  );
}
