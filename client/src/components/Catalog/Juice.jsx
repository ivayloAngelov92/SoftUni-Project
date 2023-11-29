import { Link } from 'react-router-dom';
export default function Juice() {
  return (
    <>
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
              <Link to="/drinks/juice" className="tm-tab-link active" data-id="juice">
                Fruit Juice
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="juice" className="tm-tab-content">
        <div className="tm-list">
          <div className="tm-list-item">
            <img
              src="img/smoothie-1.png"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Strawberry Smoothie
                <span className="tm-list-item-price">$12.50</span>
              </h3>
              <p className="tm-list-item-description">
                Here is a short description for the item along with a squared
                thumbnail.
              </p>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="img/smoothie-2.png"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Red Berry Smoothie
                <span className="tm-list-item-price">$14.50</span>
              </h3>
              <p className="tm-list-item-description">
                Here is a list of 4 items or add more. You can use this template
                for commercial purposes.
              </p>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="img/smoothie-3.png"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Pineapple Smoothie
                <span className="tm-list-item-price">$16.50</span>
              </h3>
              <p className="tm-list-item-description">
                Left side logo and main menu are fixed. The video background is
                fixed.
              </p>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="img/smoothie-4.png"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Spinach Smoothie
                <span className="tm-list-item-price">$18.50</span>
              </h3>
              <p className="tm-list-item-description">
                You are not allowed to redistribute the template ZIP file on
                other template sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
