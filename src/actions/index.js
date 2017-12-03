import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = "http://localhost:3000";

export function signinUser( { username, password } ){
  return function( dispatch ){
    axios.post( `${ROOT_URL}/user/authenticate`, { username, password } )
      .then( response => {

        dispatch( { type: AUTH_USER } );

        localStorage.setItem( 'token', response.data.token );

        browserHistory.push( '/feature' );
      } )
      .catch( {

      } );
  }
}
