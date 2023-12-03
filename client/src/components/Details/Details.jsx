import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as drinkService from '../../services/drinkService';
import * as commentService from '../../services/commentService';

export default function Details() {
  const [drink, setDrink] = useState({});
  const [comments, setComments] = useState([]);
  const { drinkId } = useParams();
  useEffect(() => {
    drinkService.getOne(drinkId).then(setDrink);

    commentService.getAll(drinkId).then(setComments);
  }, [drinkId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      drinkId,
      formData.get('username'),
      formData.get('comment')
    );

    setComments((state) => [...state, newComment]);
  };

  return (
    <>
      
      <h1 className='heading'>Custom Drink Details</h1>
      
      <section className='details'>
        <img src={drink.imgUrl} />
      </section>
      <section className="tm-container">
        <h2>Details</h2>
        <p>{drink.drinkName}</p>
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
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {comments.map(({ _id, username, text }) => (
            <li key={_id} className="comment">
              <p>
                {username}: {text}
              </p>
            </li>
          ))}
        </ul>

        {comments.length === 0 && <p className="no-comment">No comments.</p>}
      </div>

      {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input type="text" name="username" placeholder="username" />
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </>
  );
}
