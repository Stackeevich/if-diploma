import React from 'react';
import './SignUp.scss';
import { useHistory } from 'react-router-dom';
import { SignUpReduxForm } from './SignUpForm';

export const fields = ['userName', 'birthday', 'email', 'password'];

const SignUp = (props) => {
  const history = useHistory();

  const goToLogin = (values) => {
    history.push(`/login`);
    const user = {
      userName: values.username,
      email: values.email,
      birthday: values.birthday,
      password: values.password,
    };
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <>
      <div className="modal__wrapper" onClick={() => history.goBack()}>
        <section className="sign-up settings" onClick={(e) => e.stopPropagation()}>
          <div className="settings-header">
            <h2>Welcome to Fox Library</h2>
          </div>
          <SignUpReduxForm onSubmit={goToLogin} />
        </section>
      </div>
    </>
  );
};

export default SignUp;
