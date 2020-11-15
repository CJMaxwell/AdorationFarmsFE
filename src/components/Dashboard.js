import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';
import useInvestment from '../hooks/useInvestment';
import SidebarProvider from '../providers/SidebarProvider';

const Wrapper = styled.section`
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
}
.investment {
  background-color: ${({ theme }) => theme.colors.gray3};
}
.invest-now {
  background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
};
`;


const Dashboard = () => {
  const history = useHistory();

  const handleClick = () => history.push('/invest');
  const investments = useInvestment();

  return (
    <SidebarProvider>
      <Wrapper className="flex">
        <DashboardSidebar />
        <main className="w-full lg:w-3/4 main-section">
          <ProfileNavbar />
          <section className="block lg:flex">
            <section className="lg:w-1/2 m-8 lg:my-8 lg:ml-8 lg:mr-4 p-8 lg:p-12 bg-white shadow-lg rounded-lg">
              <section className="text-center">
                <h1 className="font-semibold text-lg">Palm plantation</h1>
              </section>
              <section className="mt-6">
                <article>
                  Now you are one of us, welcome to Adoration Farms. For you, we offer a minimum of 5 acres 
                  (6 plots) of fertile land in an area that is legally free of government acquisition. 
                  Upon the completion of your payment, the land becomes fully yours with tangible legal 
                  documents to back your claim. As promised, our experts are on hand to help you manage your 
                  farm from clearing, selection of seedlings to harvesting. Our first advise is to grow 350 
                  palm seedlings on the land and watch your returns grow, literally.
              </article>
              </section>
              <section className="mt-16 text-center">
                <button
                  type="submit"
                  className="uppercase z-50 text-white rounded-full px-8 py-4 text-xl invest-now focus:outline-none"
                  onClick={handleClick}
                >
                  Invest Now
            </button>
              </section>
            </section>
            <section className="lg:w-1/2 m-8 lg:my-8 lg:ml-4 lg:mr-8 p-4 lg:p-12 bg-white shadow-lg rounded-lg">
              <section className="text-center">
                <h1 className="font-semibold text-lg">Current Investments</h1>
              </section>
              {
                investments && investments.length === 0 && (
                  <section className="mt-6">
                    <p>No Current investments</p>
                  </section>
                )
              }
              <section className="block lg:grid lg:grid-cols-2 lg:justify-between p-4 space-y-6 lg:space-y-0">
                {
                  investments && investments.length > 0 && investments.map(investment => (
                    <section className="investment w-full p-8 rounded-lg"
                      key={investment.createdAt}
                    >
                      <h1 className="text-lg">{investment.Location.city}</h1>
                      <p className="font-semibold text-xl py-2">
                        {
                          new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' })
                            .format(investment.amountInvested)
                        }
                      </p>
                      <p className="text-sm">
                        {format(new Date(investment.createdAt), 'dd/MM/yyyy')}
                      </p>
                    </section>
                  ))
                }
              </section>
            </section>
          </section>
        </main>
      </Wrapper>
    </SidebarProvider>
  )
}

export default Dashboard
