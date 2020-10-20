import { useState, useEffect } from 'react';
import axios from 'axios';


const useLocState = () => {
  const [states, setStates] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/states`, {
        headers: {
          authorization: token
        }
      })
        .then(response => {
          setStates(response.data);
        })
        .catch(err => console.log(err))
    }
  }, []);

  return states;
}

export default useLocState;