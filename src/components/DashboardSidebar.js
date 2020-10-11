import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoDashboard } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';

const Wrapper = styled.aside`
  background-image: linear-gradient(164deg,#90cc41,#21954a);
  height: 100vh;
`;
const Logo = styled.section`
  height: 20rem;
  background: url('/img/adoration-farm.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DashboardSidebar = () => {
  return (
    <Wrapper className="w-1/4 pb-8 text-white">
      <Logo />
      <ul className="pt-8">
        <li className="flex items-center space-x-8 px-16 py-4 border-b border-white">
          <GoDashboard
            size="1.5rem"
            color="#FFF"
          />
          <Link
            to="/dashboard"
          >
            Dashboard
            </Link>
        </li>
        {/* <hr /> */}
        <li className="flex items-center space-x-8 py-4 px-16 border-b border-white">
          <MdPayment
            size="1.5rem"
            color="#FFF"
          />
          <Link
            to="/dashboard"
          >
            Scheduled Payment
            </Link>
        </li>
        <li className="flex items-center space-x-8 py-4 px-16 border-b border-white">
          <FiSettings
            size="1.5rem"
            color="#FFF"
          />
          <Link
            to="/settings"
          >
            Settings
            </Link>
        </li>
        <li className="flex items-center space-x-8 py-4 px-16 border-b border-white">
          <AiOutlineLogout
            size="1.5rem"
            color="#FFF"
          />
          <Link
            to="/dashboard"
          >
            Logout
            </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default DashboardSidebar
