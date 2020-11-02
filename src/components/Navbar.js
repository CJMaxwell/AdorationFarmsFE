import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { Squash as Hamburger } from 'hamburger-react';

import useProfile from '../hooks/useProfile';

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

  const [isOpen, setOpen] = useState(false)
  const profile = useProfile();

  return (
    <MenuBar className="flex items-center bg-white justify-between uppercase flex-wrap py-2 px-8 lg:px-24">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-color mr-6 cursor-pointer">
          <img src="/img/logo.svg" alt="Logo" className="h-32" />
        </div>
      </Link>
      <div className="block lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="w-full lg:flex lg:items-center lg:w-auto hidden">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" onClick={() => setOpen(!isOpen)} className="block mt-4 text-lg lg:inline-block lg:mt-0 font-semibold text-color hover:text-white mr-4">
            About Us
            </Link>
          <a
            href="/#our-process"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 font-semibold text-color hover:text-white mr-4">
            Our Process
              </a>
          {
            !profile && (
              <Link to="/login" onClick={() => setOpen(!isOpen)} className="block mt-4 text-lg lg:inline-block lg:mt-0 font-semibold text-color mr-4 hover:text-white">
                Sign in
              </Link>
            )
          }
        </div>
        {
          !profile && (
            <div>
              <Link to="/signup" onClick={() => setOpen(!isOpen)} className="inline-block text-lg px-8 py-4 leading-none rounded-full signup-bg font-semibold  text-white hover:border-transparent mt-4 lg:mt-0">
                Sign up
              </Link>
            </div>
          )
        }
        {
          profile && (
            <Link to="/dashboard" className="flex space-x-4 items-center cursor-pointer">
              <BiUserCircle
                size="2.5rem"
              />
            </Link>
          )
        }
      </div>
      {
        isOpen && (
          <div className="w-full block">
            <div className="text-sm lg:flex-grow">
              <Link to="/about" onClick={() => setOpen(!isOpen)} className="block mt-4 text-lg lg:mt-0 font-semibold text-color hover:text-white mr-4">
                About Us
            </Link>
              <a
                href="/#our-process"
                className="block mt-4 text-lg lg:mt-0 font-semibold text-color hover:text-white mr-4">
                Our Process
              </a>
              {
                !profile && (
                  <Link to="/login" onClick={() => setOpen(!isOpen)} className="block mt-4 text-lg lg:mt-0 font-semibold text-color mr-4 hover:text-white">
                    Sign in
                  </Link>
                )
              }
            </div>
            {
              !profile && (
                <div>
                  <Link to="/signup" onClick={() => setOpen(!isOpen)} className="inline-block text-lg px-8 py-4 leading-none rounded-full signup-bg font-semibold  text-white hover:border-transparent mt-4">
                    Sign up
              </Link>
                </div>
              )
            }
            {
              profile && (
                <Link to="/dashboard" className="flex space-x-4 items-center cursor-pointer">
                  <BiUserCircle
                    size="2.5rem"
                  />
                </Link>
              )
            }
          </div>

        )
      }
    </MenuBar>
  )
}

export default Navbar
