import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Posts</h2>
        <Button variant="primary" as={Link} to="/post/add">
          Add Post
        </Button>
      </div>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4} className="mb-4 mx-auto">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>

                <p className="mb-1">
                  <strong>Author: </strong>
                  {post.author}
                </p>
                <p>
                  <strong>Published: </strong>
                  {post.publishedDate}
                </p>

                <Card.Text>{post.shortDescription}</Card.Text>
                <Button variant="primary">
                  <Link
                    to={`/post/${post.id}`}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Read More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
