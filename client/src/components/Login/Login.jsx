import useForm from '../../hooks/useForm';
export default function Login() {
  const { values, onChange, onSubmit } = useForm({
    email: '',
    password: '',
  });
  return (
    <form id="login-page" className="auth" onSubmit={onSubmit}>
      <h2>Login</h2>
      <label htmlFor="username">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="example@domain.com"
        onChange={onChange}
        value={values.username}
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
    </form>
  );
}
