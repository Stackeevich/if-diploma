import React from 'react';
import './LogIn.scss';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { required, length } from 'redux-form-validators';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="user-info__item">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const LogInForm = (props) => {
  const history = useHistory();

  const { handleSubmit, submitting } = props;

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        label="Username"
        component={renderField}
        validate={[required(), length({ min: 2, max: 15 })]}
      />

      <Field
        name="password"
        type="password"
        label="Password"
        component={renderField}
        validate={[required(), length({ min: 1, max: 15 })]}
      />
      <div className="save-settings-btn sign-up-btn">
        <button disabled={submitting} type="submit" className="sign-in-btn">
          Log In
        </button>
      </div>

      <div className="close">
        <button onClick={() => history.push(`/`)} className="close-btn" type="button">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2.5805L14.3886 0.971375L8 7.3508L1.61143 0.971375L0 2.5805L6.38857 8.95992L0 15.3393L1.61143 16.9485L8 10.569L14.3886 16.9485L16 15.3393L9.61143 8.95992L16 2.5805Z"
              fill="#B5B5B5"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export const LogInReduxForm = reduxForm({
  form: 'login',
})(LogInForm);
