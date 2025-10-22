import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api/posts';
import { useLoading } from '../contexts/LoadingContext';
import { Button, Container, Table, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { setLoading: setGlobalLoading } = useLoading();

  useEffect(() => {
    setGlobalLoading(true);
    getPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
        setGlobalLoading(false);
      });
  }, [setGlobalLoading]);

  const handleDelete = async (id) => {
    if (!confirm('Delete this post?')) return;
    try {
      setGlobalLoading(true);
      await deletePost(id);
      setPosts((p) => p.filter((x) => x.id !== id));
    } catch (e) {
      console.error(e);
      alert('Failed to delete');
    } finally {
      setGlobalLoading(false);
    }
  };

  if (loading) return <Container className="p-3"><Spinner animation="border" /> Loading...</Container>;

  return (
    <Container className="p-3">
      <h2>Posts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">Edit</Link>
                <Button size="sm" variant="danger" onClick={() => handleDelete(post.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
