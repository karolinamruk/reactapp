import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button, Container, Modal } from 'react-bootstrap';
import { getPostById, deletePost } from '../../redux/postsRedux';

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deletePost(id));
    setShowModal(false);
  };

  if (!post) return <Navigate to="/" />;

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{post.title}</h1>
        <div>
          <Button variant="primary" as={Link} to={`/post/edit/${post.id}`}>
            Edit
          </Button>{' '}
          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete
          </Button>
        </div>
      </div>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Published:</strong> {post.publishedDate}
      </p>
      <p>{post.content}</p>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Post;
