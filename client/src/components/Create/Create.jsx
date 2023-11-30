import './Create.module.css';
export default function Create() {
  const createDrinkHandler = (e) => {
    e.preventDefault();
    const drinksData=Object.fromEntries(new FormData(e.currentTarget))
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
        <label htmlFor="imgUrl">Drink Name:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          required="true"
          placeholder="Enter image URL"
        />
        <label htmlFor="baseSpirit">Base Spirit:</label>
        <select id="baseSpirit" name="baseSpirit" required="false">
          <option value="none"></option>
          <option value="vodka">Vodka</option>
          <option value="rum">Rum</option>
          <option value="gin">Gin</option>
          <option value="gin">Whisky</option>

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
