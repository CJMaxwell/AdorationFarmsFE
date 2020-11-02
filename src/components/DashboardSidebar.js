import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoDashboard } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';

import SidebarContext from '../context/Sidebar';

const Wrapper = styled.aside`
  background-image: linear-gradient(164deg,#90cc41,#21954a);
  height:100vh;

  &.show {
    display: block;
    z-index: 100;
  }
`;
const Logo = styled.section`
  height: 8rem;
  background: url('/img/logo2.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  margin-top: 2rem;
`;

const DashboardSidebar = () => {

  const { isOpen } = useContext(SidebarContext);
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <Wrapper className={`pb-8 text-white lg:w-1/4 lg:block lg:left-0 fixed hidden ${isOpen ? 'show' : ''} lg:relative`}>
      <Link to="/">
        <Logo />
      </Link>
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
        <li className="flex items-center space-x-8 py-4 px-16 border-b border-white cursor-pointer">
          <MdPayment
            size="1.5rem"
            color="#FFF"
          />
          <span>
            Scheduled Payment
          </span>
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
          <button
            type="button"
            className="focus:outline-none"
            onClick={handleClick}
          >
            Logout
          </button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default DashboardSidebar
