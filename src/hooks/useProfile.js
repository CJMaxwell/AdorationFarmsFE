import { useState, useEffect } from 'react';
import axios from 'axios';


const useProfile = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/me`, {
        headers: {
          authorization: token
        }
      })
        .then(response => {
          setProfile(response.data);
        })
        .catch(err => console.log(err))
    }
  }, []);

  return profile;
}

export default useProfile;