import React from 'react';
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
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <div>
        <div className="flex h-screen bg-gray-200">
          <div className="block fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
          <BrowserRouter>
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
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
