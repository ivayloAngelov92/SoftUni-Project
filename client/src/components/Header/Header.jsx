import { Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="tm-container">
      <div className="tm-row">
    <div className="tm-left">
      <div className="tm-left-inner">
        <div className="tm-site-header">
        <Link to="/" className="tm-page-link">
          <i className="fas fa-coffee fa-3x tm-site-logo" />
          <h1 className="tm-site-name">Wave Cafe</h1>
          </Link>
        </div>
        <nav className="tm-site-nav">
          <ul className="tm-site-nav-ul">
            <li className="tm-page-nav-item">
              <Link to="/" className="tm-page-link active">
              <i className="fa-solid fa-mug-hot tm-page-link-icon" />
                <span>Drink Menu</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/create" className="tm-page-link">
              <i className="fas fa-glass-cheers tm-page-link-icon" />
                <span>Create your own</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/create" className="tm-page-link">
              <i className="fas fa-universal-access tm-page-link-icon" />
                <span>My Profile</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/logout" className="tm-page-link">
              <i className="fa fa-sign-out tm-page-link-icon" />
                <span>Logout</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/about" className="tm-page-link">
                <i className="fas fa-users tm-page-link-icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/latest" className="tm-page-link">
                <i className="fas fa-glass-martini tm-page-link-icon" />
                <span>Latest Inventions</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/contact" className="tm-page-link">
                <i className="fas fa-comments tm-page-link-icon" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/login" className="tm-page-link">
                <i className="fas fa-file-invoice tm-page-link-icon" />
                <span>Login</span>
              </Link>
            </li>
            <li className="tm-page-nav-item">
              <Link to="/register" className="tm-page-link">
              <i className="fas fa-address-card tm-page-link-icon" />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
    </div>
  );
}
