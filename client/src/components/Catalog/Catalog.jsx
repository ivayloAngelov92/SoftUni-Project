import { Link} from 'react-router-dom'
export default function Catalog() {
  return ( 
    <>
    <div id="drink" className="tm-page-content">
    <nav className="tm-black-bg tm-drinks-nav">
      <ul>
        <li>
          <Link to="/" className="tm-tab-link active" data-id="cold">
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
      <div id="cold" className="tm-tab-content">
            <div className="tm-list">
              <div className="tm-list-item">
                <img
                  src="/img/iced-americano.png"
                  alt="Image"
                  className="tm-list-item-img"
                />
                <div className="tm-black-bg tm-list-item-text">
                  <h3 className="tm-list-item-name">
                    Iced Americano
                    <span className="tm-list-item-price">$10.25</span>
                  </h3>
                  <p className="tm-list-item-description">
                    Here is a short description for the first item. Wave Cafe
                    Template is provided by Tooplate.
                  </p>
                </div>
              </div>
              <div className="tm-list-item">
                <img
                  src="img/iced-cappuccino.png"
                  alt="Image"
                  className="tm-list-item-img"
                />
                <div className="tm-black-bg tm-list-item-text">
                  <h3 className="tm-list-item-name">
                    Iced Cappuccino
                    <span className="tm-list-item-price">$12.50</span>
                  </h3>
                  <p className="tm-list-item-description">
                    Here is a list of 4 items or add more. You can use this
                    template for commercial purposes.
                  </p>
                </div>
              </div>
              <div className="tm-list-item">
                <img
                  src="img/iced-espresso.png"
                  alt="Image"
                  className="tm-list-item-img"
                />
                <div className="tm-black-bg tm-list-item-text">
                  <h3 className="tm-list-item-name">
                    Iced Espresso
                    <span className="tm-list-item-price">$14.25</span>
                  </h3>
                  <p className="tm-list-item-description">
                    You are not permitted to redistribute this template ZIP file
                    on any other template websites.
                  </p>
                </div>
              </div>
              <div className="tm-list-item">
                <img
                  src="img/iced-latte.png"
                  alt="Image"
                  className="tm-list-item-img"
                />
                <div className="tm-black-bg tm-list-item-text">
                  <h3 className="tm-list-item-name">
                    Iced Latte<span className="tm-list-item-price">$11.50</span>
                  </h3>
                  <p className="tm-list-item-description">
                    Contents are organized into 3 tabs. Please{' '}
                    <a
                      href="https://www.tooplate.com/contact"
                      rel="nofollow"
                      target="_parent"
                    >
                      contact Tooplate
                    </a>{' '}
                    if you have anything to ask.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </>
    
  );
}
