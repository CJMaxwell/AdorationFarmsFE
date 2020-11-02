import React from 'react';
import styled from 'styled-components';
import CustomLink from './actoms/CustomLink';

const Wrapper = styled.section`
  overflow: hidden;
  background-image: url('/img/Palm-Plantation.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 100vh;

  .content {
    padding-top: 25vh;
  }
  .big-text {
    font-size: 4.875rem;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <section className="text-white sm:w-1/2 lg:w-3/5 pl-12 lg:pl-24">
        <section className="content">
          <h1 className="font-semibold text-3xl lg:text-6xl uppercase">
            Bridging the Gap
          </h1>
          <p className="lg:text-xl pt-4">
            Adoration Farms is a leading agritech company in Nigeria duly registered with
            CAC focused on helping individual manage farm Oil Palm plantation thereby taking off
            the stress of farming activities from farm owners and producing quality palm oil for the
            market.
          </p>
          <section className="flex pt-10 uppercase">
            <CustomLink>
              Contact Us
          </CustomLink>
          </section>
        </section>

      </section>
    </Wrapper>
  )
}

export default Banner
