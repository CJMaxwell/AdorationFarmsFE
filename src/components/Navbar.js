import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuBar = styled.nav`
  border-style: solid;
  border-width: 4px;
  border-image: linear-gradient(164deg,#7E1A16,#FE7A15) 100% 0 0 0/4px 0 0 0 stretch;
  .text-color {
    color: ${({ theme }) => theme.colors.gray1};
  }
  .signup-bg {
    background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
  }
  .text-hover {
    color: ${({ theme }) => theme.colors.green2};
    border: 1px solid ${({ theme }) => theme.colors.green2};
  }
`;

const Navbar = () => {
  return (
    <MenuBar className="flex items-center bg-white justify-between uppercase flex-wrap py-12 px-24">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-color mr-6 cursor-pointer">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight">Adoration Farms</span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-hover">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" className="block mt-4 text-lg lg:inline-block lg:mt-0 font-semibold text-color hover:text-white mr-4">
            About Us
            </Link>
          <a
            href="/#our-process"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 font-semibold text-color hover:text-white mr-4">
            Our Process
          </a>
          <Link to="/login" className="block mt-4 text-lg lg:inline-block lg:mt-0 font-semibold text-color mr-4 hover:text-white">
            Sign in
          </Link>

        </div>
        <div>
          <Link to="/signup" className="inline-block text-lg px-8 py-4 leading-none rounded-full signup-bg font-semibold  text-white hover:border-transparent mt-4 lg:mt-0">
            Sign up
          </Link>
        </div>
      </div>
    </MenuBar>
  )
}

export default Navbar
