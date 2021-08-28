import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar.js';
import Header from './components/header.js';
import Login from './screens/login.js';
import Farm from './screens/farm.js';
import Harvest from './screens/harvest.js';

const App = () => {
  const [token, setToken] = useState();

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
                <Route path="/farm">
                  <Farm />
                </Route>
                <Route path="/harvest">
                  <Harvest />
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
