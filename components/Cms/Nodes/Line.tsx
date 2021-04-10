import React, { ChangeEvent, useContext, useState } from 'react';

import { ServicesModule } from '../../../services/initServices';
import AppContext from '../../AppContext';
import { LineNodeInterface } from './NodeInterface';

export default function Line({
  display, id, value, options,
}: LineNodeInterface) {
  const [state, setState] = useState(value || '');
  const { pageService } = useContext<ServicesModule>(AppContext);
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    pageService.update(id, userInput, options);
    setState(userInput);
  };

  if (display === 'preview') {
    return (<div>Add text line</div>);
  }

  if (display === 'edit') {
    return (
      <div>
        <input type="text" value={state} onChange={change} />
      </div>
    );
  }

  return (
    <div>
      {value}
    </div>
  );
}
