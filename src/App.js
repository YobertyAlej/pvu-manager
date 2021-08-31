import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/dark-mode.js';
import Header from './components/topbar/dark-mode';
import Login from './screens/login.js';
import Dashboard from './screens/dashboard.js';
import CreatePlant from './screens/plant/create.js';
import Harvest from './screens/harvest.js';
import useToken from './hooks/useToken.js';
import CreateSow from './screens/sows/create.js';

const App = () => {
  const [show, setSidebar] = useState(true);
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

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

  return (
    <div className="App">
      <div>
        <div className="flex h-screen bg-gray-200">
          <BrowserRouter>
            <Sidebar show={show} />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header show={show} />
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
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
