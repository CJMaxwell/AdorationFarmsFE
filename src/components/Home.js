import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  overflow: hidden;
  background-image: url('/img/Palm-Plantation.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.1));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <Wrapper />
  )
}

export default Home
