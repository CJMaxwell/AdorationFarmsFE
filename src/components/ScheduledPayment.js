import React from 'react';
import styled from 'styled-components';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';

const Wrapper = styled.section`
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 100vh;
}
.pay-now:hover {
  background-color: ${({ theme }) => theme.colors.green2}
}
`;

const ScheduledPayment = () => {
  return (
    <Wrapper className="flex">
      <DashboardSidebar />
      <main className="w-3/4 main-section">
        <ProfileNavbar />
        <section className="px-24 pt-8">
          <div className="py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <div className="align-middle rounded-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
              <div className="align-middle inline-block min-w-full overflow-hidden px-8 pt-4 pb-8 rounded-lg">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left leading-4 tracking-wider">Due Date</th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 tracking-wider">Description</th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 tracking-wider">Amount</th>
                      <th className="px-6 py-3 border-b-2 border-gray-200">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900">10/10/2020</div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        Investment payment for October, 2020
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        &#8358;56,700
                      </td>
                      <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button className="px-5 py-2 border-gray-500 border rounded transition duration-300 pay-now hover:text-white focus:outline-none">Pay Now</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900">10/11/2020</div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        Investment payment for November, 2020
                        </td>
                      <td
                        className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        &#8358;56,700
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button className="px-5 py-2 border-gray-500 border rounded transition duration-300 pay-now hover:text-white focus:outline-none">Pay Now</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900">10/12/2020</div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        Investment payment for December, 2020
                        </td>
                      <td
                        className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        &#8358;56,700
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button className="px-5 py-2 border-gray-500 border rounded transition duration-300 pay-now hover:text-white focus:outline-none">Pay Now</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}

export default ScheduledPayment
