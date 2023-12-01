import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as drinkService from "../../services/drinkServices";

export default function Details() {
    const [ drink, setDrink]= useState({})
    const { drinkId}= useParams()
    useEffect(() =>{
        drinkService.getOne(drinkId)
            .then(result=>setDrink(result))
    }, [drinkId])
    

    return (
        <>
        <header>
          <h1>Custom Drink Details</h1>
        </header>
        <section>
          <img src={drink.imgUrl} alt="Custom Drink Image" />
        </section>
        <section className="tm-container">
          <h2>Details</h2>
          <p>
            {drink.drinkName}
          </p>
          <p>
            <strong>Price:</strong> ${drink.price}
          </p>
          <p>
            <strong>Type:</strong> {drink.type}
          </p>
          <p>
            <strong>Ingredients:</strong> {drink.ingredients}
          </p>
          <p>
            <strong>Instructions:</strong> {drink.instructions}
          </p>
          <p>
            <strong>Description:</strong> {drink.description}
          </p>
        </section>
      </>
    );
    }