import useForm from '../../hooks/useForm';

const loginFromKeys = {
  email: 'email',
  password: 'password',
};
export default function Login({ loginSubmitHandler }) {
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFromKeys.email]: '',
    [loginFromKeys.password]: '',
  });
  return (
    <form id="login-page" className="auth" onSubmit={onSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name={loginFromKeys.email}
        placeholder="example@domain.com"
        onChange={onChange}
        value={values[loginFromKeys.email]}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name={loginFromKeys.password}
        onChange={onChange}
        value={values[loginFromKeys.password]}
      />
      <input
        style={{ paddingLeft: '120px' }}
        className="tm-page-link"
        type="submit"
        value="Login"
      />
    </form>
  );
}
