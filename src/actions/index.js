import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = "http://localhost:3000";

export function signinUser( { username, password } ){
  return function(dispatch){
    axios.post(`${ROOT_URL}/user/authenticate`, { username, password })
      .then( response => {
        browserHistory.push('/feature');
      })
      .catch({

      });
  }
}
