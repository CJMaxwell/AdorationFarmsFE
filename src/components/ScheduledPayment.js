import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Loader from 'react-loader-spinner';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import axios from 'axios';
import { notify } from 'react-notify-toast';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';
import InvestmentContext from '../context/Investment';

const Wrapper = styled.section`
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 100vh;
}
.pay-now {
  background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.green2};
}
.text-blue-900 {
  color: #000;
}
.responsiveTable tbody tr {
  border: 1px solid ${({ theme }) => theme.colors.gray3};
}
`;

const ScheduledPayment = () => {

  const theme = useContext(ThemeContext);
  const { investment } = useContext(InvestmentContext);
  const [loading, setLoading] = useState();

  const monthlyDue = investment.amount / investment.paymentPeriod;
  const currentDate = new Date();

  const pay = async (callback) => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/investments`, {
        duration: investment.paymentPeriod,
        locId: investment.locId,
        unitsPurchased: investment.unitsPurchased
      }, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      });

      window.location.href = result.data.paymentUrl;
    } catch (error) {
      callback();
      notify.show(error.response.data.message, 'error');
    }
  }

  return (
    <Wrapper className="flex">
      <DashboardSidebar />
      <main className="w-full lg:w-3/4 main-section">
        <ProfileNavbar />
        <section className="px-8 lg:px-24 pt-8">
          <div className="py-2 overflow-x-auto sm:-mx-6 px-0 lg:-mx-8 lg:pr-10 lg:px-8">
            <div className="align-middle rounded-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-0 lg:px-12">
              <div className="align-middle inline-block min-w-full overflow-hidden px-0 lg:px-8 pt-4 pb-8 rounded-lg">
                {/* <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="w-1/3 px-6 py-3 border-b-2 border-gray-200 text-left leading-4 tracking-wider">Due Date</th>
                      <th className="w-1/3 px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 tracking-wider">Description</th>
                      <th className="w-1/3 px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {
                      Array(investment.paymentPeriod).fill('').map((_, i) => {
                        const dueDate = addDays(currentDate, i * 30);

                        return (
                          <tr key={`installment${i}`}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                              <div className="text-sm leading-5 text-blue-900">{format(dueDate, 'dd/MM/yyyy')}</div>
                            </td>
                            <td
                              className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                              Investment payment for {format(dueDate, 'MMMM, yyyy')}.
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                              {
                                new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' })
                                  .format(monthlyDue)
                              }
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table> */}

                <Table>
                  <Thead>
                    <Tr>
                      <Th className="px-6 py-3 border-b-2 border-gray-200 text-left leading-4 tracking-wider">Due Date</Th>
                      <Th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 tracking-wider">Description</Th>
                      <Th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 tracking-wider">Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody className="bg-white">
                    {
                      Array(investment.paymentPeriod).fill('').map((_, i) => {
                        const dueDate = addDays(currentDate, i * 30);

                        return (
                          <Tr key={`installment${i}`}>
                            <Td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                              <div className="text-sm leading-5 text-blue-900">{format(dueDate, 'dd/MM/yyyy')}</div>
                            </Td>
                            <Td
                              className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                              Investment payment for {format(dueDate, 'MMMM, yyyy')}.
                      </Td>
                            <Td
                              className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                              {
                                new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' })
                                  .format(monthlyDue)
                              }
                            </Td>
                          </Tr>
                        )
                      })
                    }
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
          <section>
            <section className="px-6 py-4 flex justify-center whitespace-no-wrap text-sm leading-5">
              <button
                className="px-5 py-4 text-xl rounded-full transition duration-300 pay-now focus:outline-none"
                type="button"
                onClick={() => {
                  setLoading(true);
                  pay(() => {
                    setLoading(false)
                  })
                }}
              >
                {loading ? (
                  <Loader
                    type="TailSpin"
                    color={theme.colors.green2}
                    height={20}
                    width={60}
                  />
                ) : (
                    'Start Payment'
                  )}
              </button>
            </section>
          </section>
        </section>
      </main>
    </Wrapper>
  )
}

export default ScheduledPayment
