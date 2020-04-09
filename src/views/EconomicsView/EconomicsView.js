import React from 'react';
import AppContext from 'context';
import List from 'components/List/List';

const EconomicsView = () => (
  <AppContext.Consumer>
  {(context) => (
    <List items={context.economic} />
  )}
</AppContext.Consumer>
);

export default EconomicsView;