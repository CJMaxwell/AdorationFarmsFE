import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';
import useInvestment from '../hooks/useInvestment';

const Wrapper = styled.section`
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 100vh;
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
    <Wrapper className="flex">
      <DashboardSidebar />
      <main className="w-3/4 main-section">
        <ProfileNavbar />
        <section className="flex">
          <section className="w-1/2 my-8 ml-8 mr-4 p-12 bg-white shadow-lg rounded-lg">
            <section className="text-center">
              <h1 className="font-semibold text-lg">Palm plantation</h1>
            </section>
            <section className="mt-6">
              <article>
                We offer palm plantation on a minimum of 5 acres(6 plots) of land in an area free of government acquisition.
                The land becomes outrightly yours after payment. From our experts' estimation, we grow 350 palm seedlings on the 5 acres of the land.
                Adoration Farms helps in managing the farmland from plumbing to harvesting as well as getting the
                getting the land's documents.
              </article>
            </section>
            <section className="mt-16 text-center">
              <button
                type="submit"
                className="uppercase text-white rounded-full px-8 py-4 text-xl invest-now focus:outline-none"
                onClick={handleClick}
              >
                Invest Now
            </button>
            </section>
          </section>
          <section className="w-1/2 my-8 ml-4 mr-8 p-12 bg-white shadow-lg rounded-lg">
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
            <section className="grid grid-cols-2 justify-between p-4">
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
  )
}

export default Dashboard
