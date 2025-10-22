const BASE = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export async function createPost(data) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create post');
  return res.json();
}

export async function updatePost(id, data) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update post');
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete post');
  return true;
}
