import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import CustomLink from './actoms/CustomLink';

const Wrapper = styled.section`

  .wrapper {
    background-image: linear-gradient(164deg,#90cc41,#21954a);
  }

  .oil-kernel {
    height: 30rem;
    background: url('/img/palm-oil-fruits.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .product {
    background-color: ${({ theme }) => theme.colors.gray3}
  }
`;



const Process = () => {

  const history = useHistory();

  const handleClick = () => history.push('/signup');

  return (
    <Wrapper id="our-process">
      <section className="wrapper px-8 lg:px-24 text-white py-24">
        <section className="flex justify-center pb-10">
          <h1 className="font-semibold text-xl uppercase">
            How it works
          </h1>
        </section>
        <section className="sm:block lg:flex lg:items-start lg:justify-between lg:space-x-6">
          <section>
            <section className="flex items-center space-x-8">
              <div>
                <span className="font-semibold text-xl">1.</span>
              </div>
              <div>
                <img src="/img/user-new-lg.02b06d7c.svg" alt="Create an account" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Create an Account</h1>
            <p className="mt-2">
              Be part of our community constantly seeking the produce and distribute health palm oil
              with the globe with just a click.
            </p>
          </section>
          <section>
            <section className="flex items-center space-x-8">
              <div>
                <span className="font-semibold text-xl">2.</span>
              </div>
              <div>
                <img src="/img/farm-new-lg.c6b714ef.svg" alt="Create an account" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Select your Plot</h1>
            <p className="mt-2">
              Select the number acres of farmland that you would love to grow palm trees on. We
              help you manage the farm from clearing to harvesting.
            </p>
          </section>
          <section className="">
            <section className="flex items-center space-x-8">
              <div>
                <span className="font-semibold text-xl">3.</span>
              </div>
              <div>
                <img src="/img/updates-new-lg.b9c4e918.svg" alt="Create an account" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Get Updates</h1>
            <p className="mt-2">
              We keep you posted with realtime update on your personalized dashboard and emails on the
              progress of your farm.
          </p>
          </section>
          <section className="">
            <section className="flex items-center space-x-8">
              <div>
                <span className="font-semibold text-xl">4.</span>
              </div>
              <div>
                <img src="/img/returns-new-lg.324ef96c.svg" alt="Create an account" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Enjoy Revenue</h1>
            <p className="mt-2">
              At maturity, you can either take charge of harvesting your farm and processing proceeds
              or leaving to us to manage and pay returns.
            </p>
          </section>
        </section>
        <section className="flex justify-center pt-10">
          <CustomLink
            onClick={handleClick}
          >
            Get Started
          </CustomLink>
        </section>
      </section>
      <section className="block lg:grid lg:grid-cols-2 lg:gap-16 product">
        <section className="oil-kernel" />
        <section className="px-8 lg:px-0 pr-24 pt-16">
          <h1 className="font-semibold text-xl">Adoration Palm Oil</h1>
          <p className="pt-6 text-justify">
            Our amazing palm oil from Adoration Farms helps in decreasing cholesterol levels, reducing oxidative stress,
            boosting brain health, slowing the progression of heart disease, increasing vitamin A status,
            and improving skin and hair health. This is because they are processed with no addictives.
        </p>
        </section>
      </section>
    </Wrapper >
  )
}

export default Process
