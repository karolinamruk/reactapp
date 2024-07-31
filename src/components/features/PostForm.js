import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label className="mt-4">Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
      </Form.Group>

      <Form.Group controlId="formAuthor">
        <Form.Label className="mt-4">Author</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
          required
        />
      </Form.Group>

      <Form.Group controlId="formPublishedDate">
        <Form.Label className="mt-4">Published Date</Form.Label>
        <Form.Control
          type="date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formShortDescription">
        <Form.Label className="mt-4">Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Enter short description"
          required
        />
      </Form.Group>

      <Form.Group controlId="formContent">
        <Form.Label className="mt-4">Main content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
          required
          place
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
