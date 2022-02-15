import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserSettings = ({ openedSettings }) => {
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem('user'));

  const logOut = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_USER_DATA', payload: { username: null, password: null } });
    localStorage.removeItem('user');
  };

  return (
    <div className="user-settings-block" style={{ display: openedSettings ? 'flex' : 'none' }}>
      <h3 className="user-name">{username?.userName}</h3>
      <button className="settings-btn" type="button">
        Settings
      </button>
      <button className="my-orders-btn" type="button">
        <NavLink to="/main/yourOrders">
          My orders
         </NavLink>
      </button>
      <button onClick={logOut} className="log-out-btn" type="button">
        Log out
      </button>
    </div>
  );
};

export default UserSettings;
