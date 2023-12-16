import { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as drinkService from '../../services/drinkService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import  "./Details.css"
// import reducer from './commentReducer';

export default function Details() {
  const navigate = useNavigate();
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
    try {
      const newComment = await commentService.create(drinkId, values.comment);
      setComments((state) => [...state, { ...newComment, owner: { email } }]);

    } catch (error) {
      console.log(error.message);
    }
    values.comment=''

  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${drink.drinkName}`
    );
    if (hasConfirmed) {
      await drinkService.remove(drinkId);
      navigate('/');
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: '',
  });

  return (
    <>
      <h1 className="heading">
        Custom Drink Details
      </h1>

      <section className="details">
        <img src={drink.imgUrl} style={{ width: "100%" }} />
      </section>
      <section
        className="tm-container"
        
      >
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
          <Link to={`/drinks/${drinkId}/edit`} className="tm-page-link" style={{width:"50%", textAlign: 'center'}}>
            Edit
          </Link>
          <button className="tm-page-link" onClick={deleteButtonClickHandler} style={{width:"50%", textAlign: 'center'}}>
            Delete
          </button>
        </div>
      )}
      <div className="details-comments" style={{ textAlign: 'center' }}>
        <h2>Comments</h2>
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
      {userId && (
        <article className="create-comment" style={{ textAlign: 'center' }}>
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
      )}
    </>
  );
}
