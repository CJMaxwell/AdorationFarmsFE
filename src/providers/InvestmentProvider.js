import React, { useState } from 'react';
import InvestmentContext from '../context/Investment'

const InvestmentProvider = ({ children }) => {
  const [investment, setInvestment] = useState({
    paymentPeriod: 0,
    amount: 0,
    unitsPurchased: 0,
    locId: ''
  });

  return (
    <InvestmentContext.Provider value={{
      investment,
      setInvestment
    }}>
      {children}
    </InvestmentContext.Provider>
  );
}

export default InvestmentProvider;