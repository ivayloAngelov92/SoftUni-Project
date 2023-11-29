export default function CatalogNav(){
    return (
        <div id="drink" className="tm-page-content">
          {/* Drink Menu Page */}
          <nav className="tm-black-bg tm-drinks-nav">
            <ul>
              <li>
                <a href="/" className="tm-tab-link" data-id="cold">
                  Iced Coffee
                </a>
              </li>
              <li>
                <a href="/drinks/hot" className="tm-tab-link" data-id="hot">
                  Hot Coffee
                </a>
              </li>
              <li>
                <a href="/drinks/juice" className="tm-tab-link" data-id="juice">
                  Fruit Juice
                </a>
              </li>
            </ul>
          </nav>
          </div>
    )
    
}