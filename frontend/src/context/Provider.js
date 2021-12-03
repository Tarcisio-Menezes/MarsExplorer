import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [token, setToken] = useState('');
  const [favorites, setFavorites] = useState('');

  const context = {
    userName,
    setUserName,
    userPass,
    setUserPass,
    token,
    setToken,
    favorites,
    setFavorites,
    userEmail,
    setUserEmail,
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
