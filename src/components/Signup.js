import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
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
  .input-text {
  color: ${({ theme }) => theme.colors.gray1};
};
  .login {
  background: -webkit-linear-gradient(164deg,#90cc41,#21954a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
};

`;

const Signup = () => {

  const theme = useContext(ThemeContext);
  const history = useHistory();

  return (
    <Wrapper>
      <section className="px-8 lg:px-24 flex justify-center">
        <h1 className="font-semibold text-xl pb-8">One more step, and you are a farm owner!</h1>
      </section>
      <section className="px-8 lg:px-24 flex justify-center">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: ''
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
              const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/Signup`, values);
              if (result.status === 201) {
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
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (

              <form className="w-full max-w-4xl" onSubmit={handleSubmit}>
                <div className="flex items-center input-wrap py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="First Name"
                    aria-label="First name"
                    required
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </div>
                {errors.firstName && touched.firstName && errors.firstName}
                <div className="flex items-center input-wrap pt-8">
                  <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Last Name"
                    aria-label="Last name"
                    required
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>
                {errors.lastName && touched.lastName && errors.lastName}
                <div className="flex items-center input-wrap pt-8">
                  <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
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
                {errors.email && touched.email && errors.email}
                <div className="flex items-center input-wrap pt-8">
                  <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    required
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                </div>
                {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                <div className="flex items-center input-wrap pt-8">
                  <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    required
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {errors.password && touched.password && errors.password}
                <div className="flex items-center input-wrap pt-8">
                  <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Confirm password"
                    aria-label="Confirm password"
                    required
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                </div>
                {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
                <div className="flex items-center input-wrap pt-8">
                  <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Referral Code"
                    aria-label="Enter your referal code"
                  />
                </div>
                <section className="flex items-center justify-center mt-16">
                  <button
                    className="uppercase text-white rounded-full px-8 py-4 text-xl signup focus:outline-none"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader
                        type="TailSpin"
                        color={theme.colors.green2}
                        height={20}
                        width={60}
                      />
                    ) : (
                        'Sign up'
                      )}
                  </button>
                </section>
              </form>
            )}
        </Formik>
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
