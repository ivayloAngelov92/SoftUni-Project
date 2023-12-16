import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <form className="auth" id="registration" onSubmit={onSubmit}>
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        required={true}
        onChange={onChange}
        value={values.username}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Please enter valid Email"
        required={true}
        onChange={onChange}
        value={values.email}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required={true}
        onChange={onChange}
        value={values.password}
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        onChange={onChange}
        name="confirmPassword"
        required={true}
        value={values.confirmPassword}
      />
      <input
        style={{ paddingLeft: '120px' }}
        className="tm-page-link"
        type="submit"
        value="Register"
      />
      <p className="field">
        <span>
          If you already have profile click <Link to="/login">here</Link>
        </span>
      </p>
    </form>
  );
}
