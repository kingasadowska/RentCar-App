import React from 'react';
import AppContext from 'context';
import List from 'components/List/List';

const PremiumView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.premium} />
    )}
  </AppContext.Consumer>
);

export default PremiumView;