import React, { useState } from 'react';
import SidebarContext from '../context/Sidebar'

const SidebarProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{
      isOpen,
      setOpen
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;