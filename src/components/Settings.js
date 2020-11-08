import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';
import SidebarProvider from '../providers/SidebarProvider';
import useUpdate from '../hooks/useUpdate';


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
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 100vh;
}
`;


const Settings = () => {

  const theme = useContext(ThemeContext);
  const { updatePassword } = useUpdate();

  return (
    <SidebarProvider>
      <Wrapper className="flex">
        <DashboardSidebar />
        <main className="w-full lg:w-3/4 main-section">
          <ProfileNavbar />
          <section className="px-8 lg:px-24 py-8 flex justify-center bg-white shadow-lg rounded-lg m-8">
            <Formik
              initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
              }}
              onSubmit={async (values, { setSubmitting }) => {
                updatePassword(values);
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
                  <form className="w-full lg:w-3/4" onSubmit={handleSubmit}>
                    <div className="flex items-center input-wrap py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="password"
                        placeholder="Old password"
                        aria-label="Old password"
                        required
                        name="oldPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.oldPassword}
                      />
                    </div>
                    <div className="flex items-center input-wrap pt-8">
                      <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="password"
                        placeholder="New password"
                        aria-label="New password"
                        required
                        name="newPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPassword}
                      />
                    </div>
                    <div className="flex items-center input-wrap pt-8">
                      <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="password"
                        placeholder="Repeat password"
                        aria-label="Repeat password"
                        required
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                    </div>
                    <section className="flex items-center justify-center mt-16">
                      <button
                        className="uppercase text-white rounded-full px-8 py-4 text-xl signup focus:outline-none"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {
                          isSubmitting ? (
                            <Loader
                              type="TailSpin"
                              color={theme.colors.green2}
                              height={20}
                              width={60}
                            />
                          ) : (
                              'Update Password'
                            )
                        }
                      </button>
                    </section>
                  </form>
                )}
            </Formik>
          </section>
        </main>
      </Wrapper>
    </SidebarProvider>
  )
}

export default Settings
