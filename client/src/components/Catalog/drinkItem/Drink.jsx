export default function Drink({
    imgUrl,
    drinkName,
    price,
    description
}){
    return(
        <div id="cold" className="tm-list-item">
                <img
                  src={imgUrl}
                  alt="Image"
                  className="tm-list-item-img"
                />
                <div className="tm-black-bg tm-list-item-text">
                  <h3 className="tm-list-item-name">
                    {drinkName}
                    <span className="tm-list-item-price">${price}</span>
                  </h3>
                  <p className="tm-list-item-description">
                    {description}
                  </p>
                </div>
              </div>
    )
}