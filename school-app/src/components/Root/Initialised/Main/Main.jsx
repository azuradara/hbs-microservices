import React from 'react';
import { Switch, Route } from 'react-router';

import AppGrid from '#root/components/shared/AppGrid';
import Sidebar from './Sidebar';
import Students from './Students';
import Professors from './Professors';
import Modules from './Modules';

const Main = () => {
  return (
    <AppGrid>
      <Sidebar />
      <div className="flex flex-col w-full max-h-screen">
        <div className="bg-white shadow-md rounded-md m-2 md:m-4 p-6 h-full">
          <Switch>
            <Route exact path="/" render={(props) => <div>yeye</div>} />
            <Route path="/professors" render={(props) => <Professors />} />
            <Route path="/students" render={(props) => <Students />} />
            <Route path="/modules" render={(props) => <Modules />} />
          </Switch>
        </div>
      </div>
    </AppGrid>
  );
};

export default Main;
