import React from 'react';
import AppContext from 'context';
import List from 'components/List/List';

const VanView = () => ( 
<AppContext.Consumer>
    {(context) => (
      <List items={context.van} />
    )}
  </AppContext.Consumer>
);

export default VanView;