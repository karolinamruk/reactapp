import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { getPostById } from '../../redux/postsRedux';

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));

  return (
    <Container>
      <h1>{post.title}</h1>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Published:</strong> {post.publishedDate}
      </p>
      <p>{post.content}</p>
      <div>
        <Button variant="primary" as={Link} to={`/post/edit/${post.id}`}>
          Edit
        </Button>{' '}
        <Button variant="danger">Delete</Button>
      </div>
    </Container>
  );
};

export default Post;
