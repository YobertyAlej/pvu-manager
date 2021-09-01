import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/dark-mode.js';
import Header from './components/topbar/dark-mode';
import Dashboard from './screens/dashboard.js';
import CreatePlant from './screens/plant/create.js';
import Harvest from './screens/harvest.js';
import CreateSow from './screens/sows/create.js';

const App = () => {
  return (
    <div className="App flex flex-row">
      <BrowserRouter>
        <div className="flex h-screen">
          <Sidebar />
        </div>
        <div className="w-screen overflow-hidden">
          <Header />
          <div className="h-full w-full rounded-xl shadow-lg bg-gray-200 overflow-auto">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/plants">
                <CreatePlant />
              </Route>
              <Route path="/harvest">
                <Harvest />
              </Route>
              <Route path="/sow/new">
                <CreateSow />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
