import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { addPost } from '../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch action to add post
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );

    // Redirect to home page after adding the post
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAuthor" className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPublishedDate" className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formShortDescription" className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Leave a comment here"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formContent" className="mb-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Leave a comment here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Post
      </Button>
    </Form>
  );
};

export default AddPostForm;
