import axios from 'axios';
import { notify } from 'react-notify-toast';
import { useHistory } from 'react-router-dom';



const useUpdate = () => {

  const history = useHistory();

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

  const initiatePasswordReset = (payload) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/auth/forgot-password`, payload)
      .then(response => {
        notify.show(response.data.message, 'success');
      })
      .catch(err => {
        notify.show(err.response.data.message, 'error');
      })
  }

  const passwordReset = (payload) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/auth/reset-password`, payload)
      .then(response => {
        notify.show(response.data.message, 'success');
        history.push('/login');
      })
      .catch(err => {
        notify.show(err.response.data.message, 'error');
      })
  }



  return { updatePassword, initiatePasswordReset, passwordReset };
}

export default useUpdate;