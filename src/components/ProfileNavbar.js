import React, { useContext } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import styled from 'styled-components';
import format from 'date-fns/format';
import { Squash as Hamburger } from 'hamburger-react';

import useProfile from '../hooks/useProfile';
import SidebarContext from '../context/Sidebar';


const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray3};
  border-style: solid;
  border-width: 4px;
  border-image: linear-gradient(164deg,#7E1A16,#FE7A15) 0 0 100% 0/0 0 4px 0 stretch;
`;

const ProfileNavbar = () => {

  const { isOpen, setOpen } = useContext(SidebarContext);
  const profile = useProfile();

  return (
    <Wrapper className="dashboard-nav py-4">
      {
        profile && (
          <ul className="flex items-center justify-between px-8 lg:px-24">
            <li>
              {
                format(new Date(), 'MMM. d, yyyy')
              }
            </li>
            <li className="flex space-x-4 items-center cursor-pointer">
              <h1 className="text-lg">
                {
                  `${profile.firstName} ${profile.lastName}`
                }
              </h1>
              <BiUserCircle
                size="2.5rem"
              />
              <span className="block lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </span>
            </li>
          </ul>
        )
      }

    </Wrapper>
  )
}

export default ProfileNavbar
