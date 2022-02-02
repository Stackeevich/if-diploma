import React, { useState } from 'react';
import './Header.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserSettings from './Settings/UserSettings';

const Header = () => {
  const [openedSettings, isOpenedSettings] = useState(false);
  const history = useHistory();
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleGoMain = (e) => {
    e.preventDefault();
    history.push(`/`);
  };

  const openSettings = (e) => {
    e.preventDefault();
    !openedSettings ? isOpenedSettings(true) : isOpenedSettings(false);
  };

  const searchBook = (e) => {
    dispatch({ type: 'ADD_TO_SEARCH', payload: e.currentTarget.value });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <div className="header-logo">
            <a href="" onClick={handleGoMain} className="header-logo_link">
              <svg width="172" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.405 16.265H5.98v8.495H0V2.314h14.49l.558 4.727H5.98v4.496h6.866l.559 4.728ZM16.365 16.661c0-2.689.876-4.771 2.628-6.248 1.774-1.498 3.91-2.248 6.407-2.248 2.628 0 4.786.728 6.472 2.182 1.709 1.455 2.563 3.614 2.563 6.48 0 2.688-.887 4.749-2.661 6.181-1.774 1.41-3.943 2.116-6.506 2.116-2.562 0-4.687-.694-6.373-2.083-1.687-1.388-2.53-3.515-2.53-6.38Zm6.177 0c0 1.08.24 1.95.722 2.612.482.639 1.172.958 2.07.958.942 0 1.665-.286 2.169-.86.503-.572.755-1.42.755-2.545 0-1.08-.24-1.972-.723-2.677-.481-.727-1.171-1.091-2.07-1.091-.941 0-1.664.32-2.168.959-.504.639-.756 1.52-.756 2.644ZM48.016 24.76l-2.793-3.438-2.727 3.438h-6.735l5.848-7.967-5.848-7.305 6.177-.827 3.088 3.934 3.088-3.868h6.604l-6.078 8.397 6.078 7.636h-6.702ZM80.589 24.76H64.555V2.281h5.98v17.752h9.495l.559 4.727ZM85.857 6.545c-.876 0-1.632-.32-2.267-.958-.635-.64-.953-1.4-.953-2.281 0-.904.318-1.675.953-2.314C84.225.33 84.981 0 85.857 0c.898 0 1.665.33 2.3.992.657.639.986 1.41.986 2.314 0 .881-.329 1.642-.986 2.28a3.125 3.125 0 0 1-2.3.96ZM82.9 24.76V8.727h5.98V24.76H82.9ZM92.815 24.76V1.785l5.98-.364v7.604a8.13 8.13 0 0 1 1.543-.595 7.224 7.224 0 0 1 1.939-.265c2.563 0 4.479.794 5.75 2.38 1.27 1.587 1.905 3.57 1.905 5.95 0 2.403-.635 4.442-1.905 6.117-1.249 1.675-3.275 2.512-6.079 2.512-.898 0-1.807-.187-2.727-.562a10.977 10.977 0 0 1-2.398-1.355l-.986 1.553h-3.022Zm10.94-8.132c0-.948-.262-1.774-.788-2.48-.504-.726-1.238-1.09-2.201-1.09-.241 0-.559.044-.953.132a5.031 5.031 0 0 0-1.019.33v5.72c.307.286.69.529 1.15.727.46.176.898.264 1.314.264.898 0 1.534-.396 1.906-1.19.394-.815.591-1.62.591-2.413ZM112.9 24.76v-16h2.99l1.445 1.62c.657-.44 1.435-.826 2.333-1.157a7.752 7.752 0 0 1 2.694-.496l1.216 4.827c-.789 0-1.599.11-2.431.33a6.253 6.253 0 0 0-2.267 1.124v9.752h-5.98ZM129.871 19.372c0 .264.109.485.328.661.219.176.471.264.756.264.35 0 .701-.077 1.051-.23a4.61 4.61 0 0 0 1.052-.662v-1.19h-1.84c-.395 0-.723.11-.986.33-.241.199-.361.474-.361.827Zm-4.469-9.686c.833-.375 1.884-.716 3.154-1.025a15.338 15.338 0 0 1 3.877-.496c2.169 0 3.812.606 4.929 1.818 1.117 1.213 1.675 2.832 1.675 4.86v9.917h-2.661l-1.084-1.223c-.482.485-1.117.87-1.906 1.157a7.35 7.35 0 0 1-2.53.43c-2.015 0-3.515-.507-4.501-1.52-.986-1.014-1.478-2.348-1.478-4 0-1.742.58-3.009 1.741-3.802 1.161-.816 2.661-1.223 4.501-1.223h1.906c-.088-.485-.318-.86-.69-1.125-.373-.264-.833-.396-1.38-.396-.548 0-1.194.099-1.939.297-.744.177-1.423.397-2.037.662l-1.577-4.331ZM142.643 24.76v-16h2.99l1.445 1.62c.657-.44 1.435-.826 2.333-1.157a7.752 7.752 0 0 1 2.694-.496l1.216 4.827c-.789 0-1.599.11-2.431.33a6.253 6.253 0 0 0-2.267 1.124v9.752h-5.98ZM159.811 24.826l.131-.363-5.98-15.14 5.849-.596 3.187 9.058 3.055-9.058H172l-6.998 17.918c-.504 1.3-1.446 2.424-2.826 3.372-1.38.97-2.858 1.63-4.435 1.983l-2.004-4.661c.788-.33 1.621-.716 2.497-1.157.876-.419 1.401-.87 1.577-1.356Z"
                  fill="#FF5D4F"
                />
              </svg>
            </a>
          </div>
          <form className="header-form">
            <div className="header-input_loop">
              <button className="header-form-button" type="button">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            <input
              onChange={searchBook}
              type="text"
              className="header-input"
              placeholder="Search by author, title, name"
              disabled={!auth}
            />
          </form>
          <nav className="header-nav">
            <div className="menu-burger">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <path d="M3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L3.5,7 Z M3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L3.5,12 Z M3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L3.5,17 Z" />
                </svg>
              </a>
            </div>
            <ul className="auth-nav-list" style={{ display: auth ? 'none' : 'flex' }}>
              <li>
                <NavLink to="/login" activeClassName="nav-link-selected">
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/signup/1',
                    state: { modal: true },
                  }}
                  activeClassName="nav-link-selected"
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
            <div className="page-nav" style={{ display: auth ? 'flex' : 'none' }}>
              <ul className="page-nav-list">
                <li>
                  <NavLink to="/main/allBooks" activeClassName="nav-link-selected">
                    All books
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/main/yourOrders" activeClassName="nav-link-selected">
                    Your orders
                  </NavLink>
                </li>
              </ul>
              <div className="user-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="7.5"
                    fill="url(#pattern0)"
                    stroke="#B5B5B5"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0" transform="scale(0.00390625)" />
                    </pattern>
                    <image
                      id="image0"
                      width="256"
                      height="256"
                      xlinkHref="data:image/jpeg;base64,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"
                    />
                  </defs>
                </svg>
                <button onClick={openSettings} className="user-settings-btn" type="button">
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z"
                      fill="#616161"
                    />
                  </svg>
                </button>
                <UserSettings openedSettings={openedSettings} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
