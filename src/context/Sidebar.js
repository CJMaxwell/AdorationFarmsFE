import { createContext } from 'react';


const SidebarContext = createContext({
  isOpen: false,
  setOpen: () => { }
});


export default SidebarContext;