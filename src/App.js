import "./App.css";
import React from 'react';
import Navbar from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import { SidebarProvider } from './utils/UseSidebar';
import { Provider } from'react-redux';
import store from "./utils/store.js";

const App = () => {
  return (
    <Provider store={store}>
        <SidebarProvider>
          <div className="App">
            <Navbar />
            <Body />
          </div>
        </SidebarProvider>
    </Provider>
  );
};

export default App;
