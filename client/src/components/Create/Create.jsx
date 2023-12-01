import './Create.module.css';
import { useNavigate } from 'react-router-dom'
import { create } from '../../services/drinkServices';
export default function Create() {
  const navigate = useNavigate()
  const createDrinkHandler = async(e) => {
    e.preventDefault();

    const drinksData=Object.fromEntries(new FormData(e.currentTarget))
    try{
      await create(drinksData)
      if(drinksData.type === 'iced'){
        navigate('/drinks/iced')
      }else if(drinksData.type === 'hot') {
        navigate('/drinks/hot')
      }else if(drinksData.type === 'juice') {
        navigate('/drinks/juice')
      }
    }catch(err){
      console.log(err);
    }
    console.log(drinksData.type);
    console.log(drinksData);
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createDrinkHandler}>
        <h2>Create Your Own Drink</h2>
        <label htmlFor="drinkName">Drink Name:</label>
        <input
          type="text"
          id="drinkName"
          name="drinkName"
          required="true"
          placeholder="Name your drink"
        />
        <label htmlFor="drinkName">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min={0}
          step="any"
          required="true"
          placeholder="Price"
        />
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          required="true"
          placeholder="Enter image URL"
        />
        <label htmlFor="baseSpirit">Type:</label>
        <select id="type" name="type" required="true">
          <option value="iced">iced</option>
          <option value="hot">hot</option>
          <option value="juice">juice</option>

          {/* Add more options as needed */}
        </select>
        <label htmlFor="baseSpirit">Base Spirit:</label>
        <select id="baseSpirit" name="baseSpirit" required="false">
          <option value="none"></option>
          <option value="vodka">Vodka</option>
          <option value="rum">Rum</option>
          <option value="gin">Gin</option>
          <option value="whisky">Whisky</option>

          {/* Add more options as needed */}
        </select>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          rows={4}
          required=""
          defaultValue={''}
          placeholder="All Ingredient necessary for this recipe."
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={4}
          required=""
          defaultValue={''}
          placeholder="Some clarification"
        />
        <button className="btn" type="submit">
          Create Drink
        </button>
      </form>
    </section>
  );
}