import './Create.module.css';
import { useNavigate } from 'react-router-dom'
import { create } from '../../services/drinkService';
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
      }else{
        navigate('/')
      }
    }catch(err){
      console.log(err);
    }
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
          placeholder="Name your drink"
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min={0}
          step="any"
          placeholder="Price"
        />
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          placeholder="Enter image URL"
        />
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" required={true}>
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
          placeholder="All Ingredient necessary for this recipe."
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={4}
          placeholder="Some clarification"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Description"
        />
        <input className="tm-page-link" type="submit" value="Create Drink"/>
          
        
      </form>
    </section>
  );
}
