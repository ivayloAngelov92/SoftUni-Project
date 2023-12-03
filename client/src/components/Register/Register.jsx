export default function Register() {
  return (
    <form className="auth" id="registration">
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username"/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Please enter valid Email"/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"/>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
      />
      <input style={{paddingLeft: "120px"}} className="tm-page-link" type="submit" value="Register"/>
    </form>
  );
}
