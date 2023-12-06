import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: '',
    password: '',
  });
  return (
    <form id="login-page" className="auth" onSubmit={onSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="example@domain.com"
        onChange={onChange}
        value={values.email}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={onChange}
        value={values.password}
      />
      <input
        style={{ paddingLeft: '120px' }}
        className="tm-page-link"
        type="submit"
        value="Login"
      />
      <p className="field">
        <span>
          If you don't have profile click <a href="#">here</a>
        </span>
      </p>
    </form>
  );
}
