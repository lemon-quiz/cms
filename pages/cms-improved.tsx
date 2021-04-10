import React, { useEffect, useState } from 'react';

import Context from '../components/Cms/Context';

export default function CmsImproved() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  });

  if (!render) {
    return (<div>Javascript must be enabled to display this page.</div>);
  }

  return (
    <div>
      <Context />
    </div>
  );
}
