import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  .input-wrap {
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(164deg,#90cc41,#21954a) 0 0 100% 0/0 0 1px 0 stretch;
  };
  .signup {
    background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
  };
  .login {
  background: -webkit-linear-gradient(164deg,#90cc41,#21954a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
};
.input-text {
  color: ${({ theme }) => theme.colors.gray1};
};
`;

const Signup = () => {
  return (
    <Wrapper>
      <section className="px-24 flex justify-center">
        <form className="w-full max-w-4xl">
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
        </form>
      </section>
      <section className="flex justify-center items-center pt-6">
        <section>
          <span className="pr-2">Already have an account?</span>
          <Link className="uppercase login" to="/login">Sign in</Link>
        </section>
      </section>
    </Wrapper>
  )
}

export default Signup
