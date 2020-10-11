import React from 'react';
import styled from 'styled-components';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';
import Form from './Form';

const Wrapper = styled.section``;


const Settings = () => {
  return (
    <Wrapper className="flex">
      <DashboardSidebar />
      <main className="w-3/4 main-section">
        <ProfileNavbar />
        <section className="px-24 pt-8 flex justify-center">
          <Form />
        </section>
      </main>
    </Wrapper>

  )
}

export default Settings
