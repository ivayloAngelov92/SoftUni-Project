import './Login.module.css'
export default function Login() {
    return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="tm-form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="tm-form-control"
            placeholder="Enter your username"
          />
        </div>
        <div className="tm-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="tm-form-control"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="tm-btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
