import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as drinkService from '../../services/drinkService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import LikeContext from '../../contexts/likeContext';
import useForm from '../../hooks/useForm';
import './Details.css';
// import reducer from './commentReducer';



export default function Details() {
  const navigate = useNavigate();
  const { drinkId } = useParams();
  const { email, userId } = useContext(AuthContext);
  const { addLike, removeLike }= useContext(LikeContext)
  
  
  const [drink, setDrink] = useState({});
  const [comments, setComments] = useState([]);
  const [like, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    drinkService.getOne(drinkId).then(setDrink);
    drinkService.allLikes(drinkId).then(setLikes);
    drinkService.hasLiked(drinkId,userId).then(setHasLiked);
    commentService.getAll(drinkId).then(setComments);
  }, [drinkId, userId]);

  const addCommentHandler = async (values) => {
    try {
      const newComment = await commentService.create(drinkId, values.comment);
      setComments((state) => [...state, { ...newComment, owner: { email } }]);
    } catch (error) {
      alert(error.message);
    }
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
  const likeButtonClickHandler = async () => {
    try {
       await drinkService.like({drinkId: drinkId});
       setLikes((state)=> Number(state)+1)
       setHasLiked((state)=> !state)
       addLike(drinkId)
    } catch (error) {
      alert(error.message);
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: '',
  });

  return (
    <div className='details-container'>
      <h1 className="heading">Custom Drink Details</h1>

      <section className="details">
        <img src={drink.imgUrl} style={{ width: '100%' }} />
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
        <p>Likes:{like} </p>
      </section>

      {userId === drink._ownerId && (
        <div className="buttons">
          <Link
            to={`/drinks/${drinkId}/edit`}
            className="tm-page-link"
            style={{ width: '50%', textAlign: 'center'}}
          >
            Edit
          </Link>
          <button
            className="tm-page-link"
            onClick={deleteButtonClickHandler}
            style={{ width: '50%', textAlign: 'center' }}
          >
            Delete
          </button>
        </div>
      )}
      { !hasLiked && userId && userId != drink._ownerId && (
        <div className="buttons">
          <button
            className="tm-page-link"
            onClick={likeButtonClickHandler}
            style={{ width: '100%', textAlign: 'center' }}
          >
            Like
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
          <form className="form" onSubmit={onSubmit}>
          <label>Add new comment</label>
            <textarea
              name="comment"
              value={values.comment}
              onChange={onChange}
              placeholder="Comment......"
            ></textarea>
            <button className="tm-page-link" type="submit" style={{ width: '100%', textAlign: 'center' }}>Add Comment</button>
          </form>
        </article>
      )}
    </div>
  );
}
