import axios from 'axios';
import { notify } from 'react-notify-toast';


const useUpdate = () => {
  const updatePassword = (payload) => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post(`${process.env.REACT_APP_BASE_URL}/auth/update-password`, payload, {
        headers: {
          authorization: token
        }
      })
        .then(response => {
          notify.show(response.data.message, 'success');
        })
        .catch(err => {
          notify.show(err.response.data.message, 'error');
        })
    }
  }
  return updatePassword;
}

export default useUpdate;