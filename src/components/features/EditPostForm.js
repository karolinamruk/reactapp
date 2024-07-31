import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from './PostForm';
import { getPostById, editPost } from '../../redux/postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if (!post) return <Navigate to="/" />;

  return post ? (
    <PostForm
      action={handleSubmit}
      actionText="Edit post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  ) : null;
};

export default EditPostForm;
