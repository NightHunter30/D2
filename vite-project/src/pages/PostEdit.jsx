import { useEffect, useState } from 'react';
import { getPost, updatePost } from '../api/posts';
import { useLoading } from '../contexts/LoadingContext';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostEdit() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const nav = useNavigate();

  const { setLoading: setGlobalLoading } = useLoading();

  useEffect(() => {
    setGlobalLoading(true);
    getPost(id)
      .then((data) => setPost(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
        setGlobalLoading(false);
      });
  }, [id, setGlobalLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setGlobalLoading(true);
    try {
      await updatePost(id, post);
      nav('/posts');
    } catch (err) {
      console.error(err);
      alert('Failed to save');
    } finally {
      setSaving(false);
      setGlobalLoading(false);
    }
  };

  if (loading) return <Container className="p-3"><Spinner animation="border" /> Loading...</Container>;

  return (
    <Container className="p-3">
      <h2>Edit Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={5} value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} required />
        </Form.Group>
        <Button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
      </Form>
    </Container>
  );
}
