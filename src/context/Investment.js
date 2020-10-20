import { createContext } from 'react';


const InvestmentContext = createContext({
  investment: {
    paymentPeriod: 0,
    amount: 0,
    unitsPurchased: 0,
    locId: ''
  },
  setInvestment: () => { }
});


export default InvestmentContext;