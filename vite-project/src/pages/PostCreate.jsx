import { useState } from 'react';
import { createPost } from '../api/posts';
import { useLoading } from '../contexts/LoadingContext';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PostCreate() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const { setLoading: setGlobalLoading } = useLoading();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGlobalLoading(true);
    try {
      await createPost({ title, body, userId: 1 });
      nav('/posts');
    } catch (err) {
      console.error(err);
      alert('Failed to create');
    } finally {
      setLoading(false);
      setGlobalLoading(false);
    }
  };

  return (
    <Container className="p-3">
      <h2>Create Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={5} value={body} onChange={(e) => setBody(e.target.value)} required />
        </Form.Group>
        <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create'}</Button>
      </Form>
    </Container>
  );
}
