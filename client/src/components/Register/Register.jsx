export default function Register() {
  return (
    <form>
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required="true" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Please enter valid Email" required="true" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"  required="true" />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required="true"
      />
      <button type="submit">Register</button>
    </form>
  );
}
