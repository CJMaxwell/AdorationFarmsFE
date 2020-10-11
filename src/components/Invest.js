import React from 'react';
import styled from 'styled-components';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';

const Wrapper = styled.section`
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 100vh;
}
.continue-btn {
  background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
}
`;


const Invest = () => {
  return (
    <Wrapper className="flex">
      <DashboardSidebar />
      <main className="w-3/4 main-section">
        <ProfileNavbar />
        <section className="flex">
          <section className="w-1/2 my-8 ml-8 mr-4 p-12 bg-white shadow-lg rounded-lg">
            <section className="text-center">
              <h1 className="text-lg font-semibold">
                New Investment
              </h1>
            </section>
            <form className="pt-8">
              <section className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="">Select your location</option>
                  <option value="ogun">Ogun State</option>
                </select>
                <section className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </section>
              </section>
              <section className="relative mt-6">
                <select className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="">Select Acres</option>
                  <option value="5 acres">5 acres</option>
                  <option value="10 acres">10 acres</option>
                  <option value="15 acres">15 acres</option>
                  <option value="20 acres">20 acres</option>
                </select>
                <section className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </section>
              </section>
              <section className="relative mt-6">
                <select className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="">Select payment period</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                </select>
                <section className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </section>
              </section>
              <section>
                <section className="mt-6">
                  <p className="py-2 font-semibold text-xl text-center">
                    &#8358;104,000
                  </p>
                </section>
              </section>
              <section className="mt-8">
                <button type="submit" className="rounded-full w-full text-white px-8 py-4 text-xl continue-btn">
                  Continue
                </button>
              </section>
            </form>
          </section>
          <section className="w-1/2 my-8 ml-4 mr-8 p-12 bg-white shadow-lg rounded-lg">
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
          </section>
        </section>
      </main>
    </Wrapper>
  )
}

export default Invest
