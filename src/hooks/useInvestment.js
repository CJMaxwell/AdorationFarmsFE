import { useState, useEffect } from 'react';
import axios from 'axios';


const useInvestments = () => {
  const [investments, setInvestments] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/client-investments`, {
        headers: {
          authorization: token
        }
      })
        .then(response => {
          setInvestments(response.data);
        })
        .catch(err => console.log(err))
    }
  }, []);

  return investments;
}
export default useInvestments;