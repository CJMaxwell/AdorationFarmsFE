import { useState } from 'react';
import axios from 'axios';


const useLocState = () => {
  const [locations, setLocations] = useState(null);
  const token = localStorage.getItem('token');
  const getLocations = (id) => {
    if (id) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/states/${id}/locations`, {
        headers: {
          authorization: token
        }
      })
        .then(response => {
          setLocations(response.data);
        })
        .catch(err => console.log(err))
    }
  }
  return {
    getLocations,
    locations
  };
}

export default useLocState;