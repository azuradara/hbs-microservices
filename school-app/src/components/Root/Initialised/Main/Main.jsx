import React from 'react';
import { Switch, Route } from 'react-router';

import AppGrid from '#root/components/shared/AppGrid';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <AppGrid>
      <Sidebar />
      <Switch>
        <Route exact path="/" render={(props) => <div>yeye</div>} />
        <Route path="/professors" render={(props) => <div>professors</div>} />
        <Route path="/students" render={(props) => <div>students</div>} />
        <Route path="/modules" render={(props) => <div>modules</div>} />
      </Switch>
    </AppGrid>
  );
};

export default Main;
