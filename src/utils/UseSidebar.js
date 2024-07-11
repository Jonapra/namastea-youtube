import React, { createContext, useState } from 'react';

// Create a context object for the sidebar
export const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({ children }) => {
  // Create a state variable to track whether the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar's open state
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the state between true and false
  };

  return (
    // The provider component makes the state and functions available to all its children
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, setIsSidebarOpen }}>
      {children} {/* Render all the children passed to this provider */}
    </SidebarContext.Provider>
  );
};