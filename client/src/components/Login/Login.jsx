
export default function Login() {
    return (
      <form>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="example@domain.com"/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
