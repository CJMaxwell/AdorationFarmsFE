import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray3};
  border-style: solid;
  border-width: 4px;
  border-image: linear-gradient(164deg,#7E1A16,#FE7A15) 0 0 100% 0/0 0 4px 0 stretch;
`;

const ProfileNavbar = () => {
  return (
    <Wrapper className="dashboard-nav py-4">
      <ul className="flex items-center justify-between px-24">
        <li>
          Oct., 10, 2020 21:53
            </li>
        <li className="flex space-x-4 items-center">
          <h1 className="text-lg">Mr. Chijioke Maxwell</h1>
          <BiUserCircle
            size="2.5rem"
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default ProfileNavbar
