import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Landing from './pages/Landing';
import PostsList from './pages/PostsList';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';
import { LoadingProvider } from './contexts/LoadingContext';
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  return (
    <LoadingProvider>
      <div className="app-root">
        <BrowserRouter>
          <TopNav />

          <main className="app-content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/posts" element={<PostsList />} />
              <Route path="/posts/create" element={<PostCreate />} />
              <Route path="/posts/:id/edit" element={<PostEdit />} />
            </Routes>
          </main>

          <LoadingOverlay />
        </BrowserRouter>
      </div>
    </LoadingProvider>
  );
}

export default App;
