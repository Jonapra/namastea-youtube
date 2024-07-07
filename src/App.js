import "./App.css";
import React from 'react';
import Navbar from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import { SidebarProvider } from './utils/UseSidebar';

const App = () => {
  return (
    <SidebarProvider>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </SidebarProvider>
  );
};

export default App;
