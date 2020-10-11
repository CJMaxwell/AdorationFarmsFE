import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Form from './Form';

const Wrapper = styled.section`
  .login {
  background: -webkit-linear-gradient(164deg,#90cc41,#21954a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
};

`;

const Signup = () => {
  return (
    <Wrapper>
      <section className="px-24 flex justify-center">
        <Form />
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
