import { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as drinkService from '../../services/drinkService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
// import reducer from './commentReducer';

export default function Details() {
  const { email, userId } = useContext(AuthContext);
  const [drink, setDrink] = useState({});
  const [comments, setComments] = useState([]);
  // const [comments, dispatch]= useReducer(reducer, [])
  const { drinkId } = useParams();

  useEffect(() => {
    drinkService.getOne(drinkId).then(setDrink);

    commentService.getAll(drinkId).then(setComments);
    // .then((result)=>{
    //   dispatch({
    //     type: 'GET_ALL_COMMENTS',
    //     payload: result
    //   });
    // });
  }, [drinkId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(drinkId, values.comment);
    // newComment.owner={email}
    // dispatch({
    //   type: "ADD_COMMENT",
    //   payload: newComment
    // })
    setComments((state) => [...state, { ...newComment, owner: { email } }]);
  };

  const initialValues= useMemo(()=> ({
      comment: '',
    }), [])
  const { values, onChange, onSubmit } = useForm(addCommentHandler,initialValues );
 
  return (
    <>
      <h1 className="heading">Custom Drink Details</h1>

      <section className="details">
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
      {userId === drink._ownerId && (
        <div className="buttons">
          <Link to={`/drinks/${drinkId}/edit`} className="button">
            Edit
          </Link>
          <Link to={`/drinks/${drinkId}/delete`} className="button">
            Delete
          </Link>
        </div>
      )}
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {comments.map(({ _id, text, owner: { email } }) => (
            <li key={_id} className="comment">
              <p>
                {email}: {text}
              </p>
            </li>
          ))}
        </ul>

        {comments.length === 0 && <p className="no-comment">No comments.</p>}
      </div>

      

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onSubmit}>
          <textarea
            name="comment"
            value={values.comment}
            onChange={onChange}
            placeholder="Comment......"
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </>
  );
}
