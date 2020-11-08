import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import axios from 'axios';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';
import { notify } from 'react-notify-toast';
import { useHistory } from 'react-router-dom';


const Wrapper = styled.section`
  .input-wrap {
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(164deg,#90cc41,#21954a) 0 0 100% 0/0 0 1px 0 stretch;
  };
  .signup {
    background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
  };
  .signup-link {
    background: -webkit-linear-gradient(164deg,#90cc41,#21954a);
    background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  };
  .input-text {
    color: ${({ theme }) => theme.colors.gray1};
  };
`;

const ForgotPassword = () => {

  const theme = useContext(ThemeContext);
  const history = useHistory();

  return (
    <Wrapper>
      <section className="px-8 lg:px-24 flex justify-center">
        <Formik
          initialValues={{
            email: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, values);
              if (result.status === 200) {
                localStorage.setItem('token', `Bearer ${result.data.token}`);
                history.push('/dashboard');
              }
            } catch (error) {
              notify.show(error.response.data.message, 'error');
            }

          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
              <form className="w-full max-w-4xl" onSubmit={handleSubmit}>
                <div className="flex items-center input-wrap pt-8">
                  <input
                    className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    aria-label="Valid email address"
                    required
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <section className="flex items-center justify-center mt-16">
                  <button
                    className="uppercase text-white rounded-full px-8 py-4 text-xl signup focus:outline-none"
                    type="submit"
                    disabled={isSubmitting}
                  >{isSubmitting ? (
                    <Loader
                      type="TailSpin"
                      color={theme.colors.green2}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Reset Password'
                    )}
                  </button>
                </section>
              </form>
            )}
        </Formik>
      </section>
    </Wrapper>
  )
}

export default ForgotPassword
