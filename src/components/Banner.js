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
          <p className="lg:text-xl pt-4 pr-8 lg:pr-0">
            The global palm oil market is worth hundreds of millions of dollars every year.
            We help individuals acquire &amp; manage Oil Palm plantations thereby taking off the
            stress of farming activities from farm owners, increasing their returns and producing
            quality palm oil for the market using the latest available technology and methods.
          </p>
          <section className="flex pt-10 uppercase">
            <CustomLink
              href="#contact-us"
            >
              Learn More
          </CustomLink>
          </section>
        </section>

      </section>
    </Wrapper>
  )
}

export default Banner
