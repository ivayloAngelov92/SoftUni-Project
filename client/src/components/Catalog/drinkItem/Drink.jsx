import { Link } from "react-router-dom"

export default function Drink({
    _id,
    imgUrl,
    drinkName,
    price,
    description,
}){
    return(
        <div className="tm-list-item">
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
                  <Link to={`/drinks/${_id}`} className="details-button">Details</Link>
                </div>
              </div>
    )
}