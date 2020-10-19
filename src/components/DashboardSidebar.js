import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <Wrapper className="w-1/4 pb-8 text-white">
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
        <li className="flex items-center space-x-8 py-4 px-16 border-b border-white">
          <MdPayment
            size="1.5rem"
            color="#FFF"
          />
          <Link
            to="/scheduled-payment"
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
