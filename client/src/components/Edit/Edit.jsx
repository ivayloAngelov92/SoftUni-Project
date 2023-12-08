import { useNavigate, useParams } from 'react-router-dom';
import { edit, getOne } from '../../services/drinkService';
import { useEffect, useState } from 'react';

export default function Edit() {
  const navigate = useNavigate();
  const { drinkId } = useParams();
  const [drink, setDrink] = useState({
    drinkName: '',
    price: '' ,
    imgUrl: '',
    type: '',
    ingredients: '',
    instructions: '',
    description: '',
  });

  useEffect(() => {
    getOne(drinkId)
    .then(result => {
      setDrink(result);
    });
  }, [drinkId]);
  const editDrinkHandler = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await edit(drinkId,values);
      navigate(`/drinks/${drinkId}`)
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
      setDrink(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));
};

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={editDrinkHandler}>
        <h2>Create Your Own Drink</h2>
        <label htmlFor="drinkName">Drink Name:</label>
        <input
          type="text"
          id="drinkName"
          name="drinkName"
          value={drink.drinkName}
          onChange={onChange}
          placeholder="Name your drink"
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={drink.price}
          min={0}
          step="any"
          onChange={onChange}
          placeholder="Price"
        />
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          value={drink.imgUrl}
          onChange={onChange}
          placeholder="Enter image URL"
        />
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={drink.type}
          onChange={onChange}
          required={true}
        >
          <option value="iced">iced</option>
          <option value="hot">hot</option>
          <option value="juice">juice</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          rows={4}
          value={drink.ingredients}
          onChange={onChange}
          placeholder="All Ingredient necessary for this recipe."
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={4}
          value={drink.instructions}
          onChange={onChange}
          placeholder="Some clarification"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={drink.description}
          onChange={onChange}
          placeholder="Description"
        />
        <input className="tm-page-link" type="submit" value="Edit Drink" />
      </form>
    </section>
  );
}
