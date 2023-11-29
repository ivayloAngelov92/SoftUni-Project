import { Link} from 'react-router-dom'

export default function CatalogNav(){
    return (
        <div id="drink" className="tm-page-content">
          {/* Drink Menu Page */}
          <nav className="tm-black-bg tm-drinks-nav">
            <ul>
              <li>
                <Link to="/" className="tm-tab-link" data-id="cold">
                  Iced Coffee
                </Link>
              </li>
              <li>
                <Link to="/drinks/hot" className="tm-tab-link" data-id="hot">
                  Hot Coffee
                </Link>
              </li>
              <li>
                <Link to="/drinks/juice" className="tm-tab-link" data-id="juice">
                  Fruit Juice
                </Link>
              </li>
            </ul>
          </nav>
          </div>
    )
    
}