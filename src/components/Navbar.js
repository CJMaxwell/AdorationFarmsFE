import React from 'react';
import styled from 'styled-components';

const MenuBar = styled.nav`
  border-top: 3px  solid ${({ theme }) => theme.colors.orange1};
  /* background-image: linear-gradient(164deg,#90cc41,#21954a); */

  .text-color {
    color: ${({ theme }) => theme.colors.gray1};
  }
  .signup-bg {
    border: 1px solid ${({ theme }) => theme.colors.green2};
    background-color: ${({ theme }) => theme.colors.green2};
  }
  .text-hover {
    color: ${({ theme }) => theme.colors.green2};
    border: 1px solid ${({ theme }) => theme.colors.green2};
  }
`;

const Navbar = () => {
  return (
    <MenuBar className="flex items-center bg-white justify-between uppercase flex-wrap py-12 px-24">
      <div className="flex items-center flex-shrink-0 text-color mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">Adoration Farms</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-hover">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-color hover:text-white mr-4">
            About Us
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-color hover:text-white mr-4">
            Our Process
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-color mr-4 hover:text-white">
            Sign in
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded-full signup-bg font-semibold  text-white hover:border-transparent mt-4 lg:mt-0">
            Sign up
          </a>
        </div>
      </div>
    </MenuBar>
  )
}

export default Navbar
