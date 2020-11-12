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
        <section className="sm:block lg:flex lg:items-start lg:justify-between lg:space-x-8">
          <section className="text-center">
            <section className="flex items-center justify-center">
              <div>
                <img src="/img/user.svg" alt="Create an account" className="h-40 lg:h-auto" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Create an Account</h1>
            <p className="mt-2">
              You just a click away from owning a farm, producing, processing and
              distributing health palm oil and palm produce within the globe.
            </p>
          </section>
          <section className="text-center">
            <section className="flex items-center justify-center">
              <div>
                <img src="/img/farm.svg" alt="Select your plot" className="h-40 lg:h-auto" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Select your Plot</h1>
            <p className="mt-2">
              How many acres of farmland would you like to grow palm trees on? You get to choose
              and we’ll help you manage the farm from clearing to harvesting.
            </p>
          </section>
          <section className="text-center">
            <section className="flex items-center justify-center">
              <div>
                <img src="/img/updates.svg" alt="Get updates" className="h-40 lg:h-auto" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Get Updates</h1>
            <p className="mt-2">
              We keep you posted with real time update on your personalized dashboard
              and send you emails on the progress of your farm.
          </p>
          </section>
          <section className="text-center">
            <section className="flex items-center justify-center">
              <div>
                <img src="/img/returns.svg" alt="Enjoy returns" className="h-40 lg:h-auto" />
              </div>
            </section>
            <h1 className="font-semibold text-xl">Enjoy Revenue</h1>
            <p className="mt-2">
              At maturity, you can either take charge of harvesting your farm and processing proceeds
              or leave to us to manage and pay you returns.
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
        <section className="px-8 lg:px-0 pr-24 py-16">
          <h1 className="font-semibold text-xl">Adoration Palm Oil</h1>
          <p className="pt-6">
            Palm Oil from Adoration Farms is produced using the best methods and materials.
            We are all about the detail and we pay close attention from the seed up.
            Using the best available technology, we produce palm oil and palm produce without additives.
            Our Palm oil help in decreasing cholesterol levels, reducing oxidative stress, boosting brain health,
            slowing the progression of heart disease, increasing vitamin A status, and improving skin and hair health.
        </p>
        </section>
      </section>
    </Wrapper >
  )
}

export default Process
