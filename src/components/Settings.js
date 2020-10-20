import React from 'react';
import styled from 'styled-components';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';

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
  return (
    <Wrapper className="flex">
      <DashboardSidebar />
      <main className="w-3/4 main-section">
        <ProfileNavbar />
        <section className="px-24 py-8 flex justify-center bg-white shadow-lg rounded-lg m-8">
          <form className="w-3/4">
            <div className="flex items-center input-wrap py-2">
              <input
                className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Old password"
                aria-label="Old password"
                required
              />
            </div>
            <div className="flex items-center input-wrap pt-8">
              <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="New password"
                aria-label="New password"
                required
              />
            </div>
            <div className="flex items-center input-wrap pt-8">
              <input className="appearance-none bg-transparent border-none w-full input-text mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Repeat password"
                aria-label="Repeat password"
                required
              />
            </div>
            <section className="flex items-center justify-center mt-16">
              <button
                type="submit"
                className="uppercase text-white rounded-full px-8 py-4 text-xl signup focus:outline-none"
              >
                Update Password
          </button>
            </section>
          </form>
        </section>
      </main>
    </Wrapper>

  )
}

export default Settings
