import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-image: linear-gradient(164deg,#90cc41,#21954a);
`;

const Process = () => {
  return (
    <Wrapper className="px-24 text-white flex items-start justify-between space-x-6 py-24">
      <section className="">
        <section className="flex items-center space-x-8">
          <div>
            <span className="font-semibold text-xl">1.</span>
          </div>
          <div>
            <img src="/img/user-new-lg.02b06d7c.svg" alt="Create an account" />
          </div>
        </section>
        <h1 className="font-semibold text-xl">Create an Account</h1>
        <p className="mt-2">Join our large community of managed farm owners investing in palm oil.Sign up today using
        your email to get started.
        </p>
      </section>
      <section className="">
        <section className="flex items-center space-x-8">
          <div>
            <span className="font-semibold text-xl">2.</span>
          </div>
          <div>
            <img src="/img/farm-new-lg.c6b714ef.svg" alt="Create an account" />
          </div>
        </section>
        <h1 className="font-semibold text-xl">Choose a Farm</h1>
        <p className="mt-2">After signing in, choose a farm from the available set of farms,
        select the number of units you would like to fund and proceed to make the payments.
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
        <p className="mt-2">On your personalised dashboard, you would get regular realtime
        updates for farm progress as well as access details of
        all the farms you have funded till date.
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
        <h1 className="font-semibold text-xl">Get Returns</h1>
        <p className="mt-2">Upon harvest, expected returns of proceeds from produce are distributed to all subscribers
        to a farm. This is done within the stated tenure period.
        </p>
      </section>
    </Wrapper>
  )
}

export default Process
