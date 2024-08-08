import "./App.css";
import React from 'react';
import Navbar from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import { SidebarProvider } from './utils/UseSidebar';
import { Provider } from'react-redux';
import store from "./utils/store.js";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import WatchVideo from './components/watchVideo/WatchVideo.js'
import MainContainer  from "./components/Body/MainContainer.js";
import Hooks from './components/Hooks/Hooks.js'


/*When the MainContainer component is loaded, it will include the sidebar and also render the Outlet component. The Outlet will initially load the Body component because the path / corresponds to Body in your router configuration.
-The router configuration specifies that the default child route for / is the Body component.
*/
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />, // Using MainContainer component
    // This will render the components based on the current route based on the outlet tag
    children: [
      {
        path: '/',
        element: <Body />, // Home path
      },
      {
        path: 'watch',
        element: <WatchVideo />, // Watch video path
      },
      {
        path: 'hooks',
        element: <Hooks/>, 
      }
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
        <SidebarProvider>
          <div className="App">
            <Navbar />
            {/* This will render the components based on the current route */}
            <RouterProvider router={appRouter} />
          </div>
        </SidebarProvider>
    </Provider>
  );
};

export default App;
