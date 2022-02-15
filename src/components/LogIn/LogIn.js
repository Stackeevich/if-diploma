import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogInReduxForm } from './LogInForm';

const LogIn = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToAllBooks = (values) => {
    dispatch({ type: 'SET_USER_DATA', payload: { username: values.username, password: values.password } });
    const user = JSON.parse(localStorage.getItem('user'));
    if (values.username === user.userName && values.password === user.password) {
      history.push(`/main/allBooks`);
    } else {
      alert('Wrong username or password');
    }
  };

  return (
    <>
      <div className="modal__wrapper" onClick={() => history.push(`/`)}>
        <section className="log-in settings" onClick={(e) => e.stopPropagation()}>
          <div className="settings-header">
            <h2>Log In to Fox Library</h2>
          </div>
          <LogInReduxForm onSubmit={goToAllBooks} />
        </section>
      </div>
    </>
  );
};

export default LogIn;
