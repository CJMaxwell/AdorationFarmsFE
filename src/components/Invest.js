import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import DashboardSidebar from './DashboardSidebar';
import ProfileNavbar from './ProfileNavbar';
import useLocState from '../hooks/useLocState';
import useLocation from '../hooks/useLocation';
import InvestmentContext from '../context/Investment';
import SidebarProvider from '../providers/SidebarProvider';

const Wrapper = styled.section`
.main-section {
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 100vh;
}
.continue-btn {
  background-image: linear-gradient(164deg,#7E1A16,#FE7A15);
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
input::placeholder::not(disabled) {
  color: #4a5568;
}
`;


const Invest = () => {

  const theme = useContext(ThemeContext);
  const history = useHistory();
  const states = useLocState();
  const { getLocations, locations } = useLocation();
  const { setInvestment } = useContext(InvestmentContext);
  const findLocation = (id, locations) => locations.find((location => location.id === id));

  const findMax = (id, locations) => {
    const location = findLocation(id, locations);
    return location.totalUnits - location.totalUnitsSold;
  }

  const calculateCostOfInvestment = (id, locations, unitsPurchased) => {
    const { amountPerUnit, lowQtyAmountPerUnit, noOfSeedlingsPerUnit, amountPerSeedling } = findLocation(id, locations);
    let costOfInvestment = 0;
    if (unitsPurchased <= 2) {
      costOfInvestment = unitsPurchased * lowQtyAmountPerUnit;
    } else {
      costOfInvestment = unitsPurchased * amountPerUnit;
    }
    const totalSeedling = unitsPurchased * noOfSeedlingsPerUnit;
    const costOfSeedlings = totalSeedling * amountPerSeedling;
    return costOfInvestment + costOfSeedlings;
  }

  return (
    <SidebarProvider>
      <Wrapper className="flex">
        <DashboardSidebar />
        <main className="w-full lg:w-3/4 main-section">
          <ProfileNavbar />
          <section className="block lg:flex">
            <section className="lg:w-1/2 m-8 lg:my-8 lg:ml-8 lg:mr-4 p-12 bg-white shadow-lg rounded-lg">
              <section className="text-center">
                <h1 className="text-lg font-semibold">
                  New Investment
              </h1>
              </section>
              <Formik
                initialValues={{
                  state: '',
                  location: '',
                  unitPurchased: '',
                  paymentPeriod: 0
                }}
                // validate={values => {
                //   const errors = {};
                //   if (!values.email) {
                //     errors.email = 'Required';
                //   } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //   ) {
                //     errors.email = 'Invalid email address';
                //   }
                //   return errors;
                // }}
                onSubmit={async (values, { setSubmitting }) => {
                  setInvestment({
                    paymentPeriod: parseInt(values.paymentPeriod),
                    amount: calculateCostOfInvestment(values.location, locations, values.unitPurchased),
                    unitsPurchased: values.unitPurchased,
                    locId: values.location
                  });

                  history.push('/scheduled-payment');
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue
                  /* and other goodies */
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="pt-8">
                    <section className="relative">
                      <select
                        name="state"
                        onChange={(e) => {
                          handleChange(e);
                          setFieldValue('location', '');
                          setFieldValue('unitPurchased', '');
                          setFieldValue('paymentPeriod', '');
                          getLocations(e.target.value);
                        }}
                        onBlur={handleBlur}
                        value={values.state}
                        className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="">Select State</option>
                        {
                          states && (
                            states.map(state => (
                              <option
                                value={state.id}
                                key={state.id}
                              >
                                {state.name} state
                              </option>
                            ))
                          )
                        }
                      </select>
                      <section className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </section>
                    </section>
                    <section className="relative mt-6">
                      <select
                        name="location"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location}
                        disabled={
                          values.state && locations ? false : true
                        }
                        className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="">Select location</option>
                        {
                          locations && (
                            locations.map(location => (
                              <option
                                value={location.id}
                                key={location.id}
                              >
                                {location.city}
                              </option>
                            ))
                          )
                        }
                      </select>
                      <section className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </section>
                    </section>
                    <section className="relative mt-6 w-full">
                      <input
                        className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        placeholder={`Specify ${values.location ? findLocation(values.location, locations).unitOfSale : 'quantity'}`}
                        name="unitPurchased"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.unitPurchased}
                        min={values.location ? findLocation(values.location, locations).minimumUnit : 0}
                        max={values.location ? findMax(values.location, locations) : 0}
                        disabled={
                          values.location ? false : true
                        }
                      />
                    </section>
                    <section className="relative mt-6">
                      <select
                        name="paymentPeriod"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.paymentPeriod}
                        disabled={
                          values.unitPurchased ? false : true
                        }
                        className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Select payment period</option>
                        <option value={3}>3 months</option>
                        <option value={6}>6 months</option>
                      </select>
                      <section className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </section>
                    </section>
                    <section>
                      <section className="mt-6">
                        {
                          values.unitPurchased && (
                            <p className="py-2 font-semibold text-xl text-center">
                              {
                                new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' })
                                  .format(calculateCostOfInvestment(values.location, locations, values.unitPurchased))
                              }
                            </p>
                          )
                        }
                      </section>
                    </section>
                    <section className="mt-8">
                      <button
                        className="rounded-full w-full text-white px-8 py-4 text-xl continue-btn"
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
                          'Continue'
                        )}
                      </button>
                    </section>
                  </form>
                )}
              </Formik>
            </section>
            <section className="lg:w-1/2 m-8 lg:my-8 lg:ml-4 lg:mr-8 p-12 bg-white shadow-lg rounded-lg">
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
      </Wrapper >
    </SidebarProvider>

  )
}

export default Invest
