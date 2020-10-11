import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`

.input-wrap {
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(164deg,#90cc41,#21954a) 0 0 100% 0/0 0 1px 0 stretch;
  };
  .signup {
    background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
  };
  .input-text {
  color: ${({ theme }) => theme.colors.gray1};
};
`;

const Form = () => {
  return (
    <Wrapper className="w-full max-w-4xl">
      <div className="flex items-center input-wrap py-2">
        <input
          className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="First Name"
          aria-label="First name"
          required
        />
      </div>
      <div className="flex items-center input-wrap pt-8">
        <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Last Name"
          aria-label="Last name"
          required
        />
      </div>
      <div className="flex items-center input-wrap pt-8">
        <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Email"
          aria-label="Valid email address"
          required
        />
      </div>
      <div className="flex items-center input-wrap pt-8">
        <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="password"
          placeholder="Password"
          aria-label="Password"
          required
        />

      </div>
      <div className="flex items-center input-wrap pt-8">
        <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="password"
          placeholder="Confirm password"
          aria-label="Confirm password"
          required
        />
      </div>
      <div className="flex items-center input-wrap pt-8">
        <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Referal Code"
          aria-label="Enter your referal code"
          required
        />
      </div>
      <section className="flex items-center justify-center mt-16">
        <button
          type="submit"
          className="uppercase text-white rounded-full px-8 py-4 text-xl signup focus:outline-none"
        >
          Sign up
          </button>
      </section>
    </Wrapper>
  )
}

export default Form
