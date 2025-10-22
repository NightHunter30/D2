import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

export default function LandingHero() {
  const headlineRef = useRef();
  const nav = useNavigate();

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="lp-hero">
      <div className="lp-hero__bg">
        <div className="shape shape--one" />
        <div className="shape shape--two" />
        <div className="shape shape--three" />
      </div>

      <div className="container lp-hero__content">
        <div className="lp-hero__left">
          <h1 ref={headlineRef} className="lp-hero__title">
            Write. Share. Inspire.
          </h1>
          <p className="lp-hero__subtitle">
            A simple, elegant blog app to capture thoughts, tutorials and stories.
            Fast, minimal and built with love.
          </p>

          <div className="lp-hero__cta">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => nav('/posts')}
            >
              Browse Posts
            </button>
            <button
              className="btn btn-outline-light btn-lg ms-2"
              onClick={() => nav('/posts/create')}
            >
              Create Post
            </button>
          </div>
        </div>

        <div className="lp-hero__right">
          <div className="card lp-hero__card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Featured</h5>
              <p className="card-text">
                Quick preview of the latest post with a subtle animation to draw
                attention.
              </p>
              <a href="/posts" className="stretched-link" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
