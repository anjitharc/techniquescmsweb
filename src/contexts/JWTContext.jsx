import PropTypes from 'prop-types';
import React, { createContext, useEffect, useReducer } from 'react';

// project import
import axios from 'utils/authAxios';
import Loader from 'component/Loader/Loader';

import { LOGIN, LOGOUT } from 'store/actions';
import authReducer from 'store/accountReducer';

// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT ||============================== //

const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken) {
          setSession(serviceToken);          
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (userName, password) => {
    const response = await axios.post('/logins', { userName, password });
    const { token } = response.data;
    if(response.data.success == true)
    {
    localStorage.setItem('user', JSON.stringify(response.data.data));
    localStorage.setItem('id', JSON.stringify(response.data.data[0].companyId));
    setSession(token);
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        
      }
    });
 
}
else
{

}
};

  const register = async (email, password, firstName, lastName) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName
    });
    const users = response.data;

    if (window.localStorage.getItem('users')) {
      const localUsers = JSON.parse(window.localStorage.getItem('users'));
      const newUsers = [...localUsers, users];
      window.localStorage.setItem('users', JSON.stringify(newUsers));
    } else {
      window.localStorage.setItem('users', JSON.stringify([users]));
    }
  };

  const logout = () => {
    setSession(null);
    localStorage.clear();
    sessionStorage.clear();
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async () => {};

  const updateProfile = () => {};

  if (!state.isInitialized) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>
      {children}
    </JWTContext.Provider>
  );
};

JWTProvider.propTypes = {
  children: PropTypes.node
};

export default JWTContext;
