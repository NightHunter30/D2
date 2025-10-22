import '../styles/landing.css';

export default function Footer() {
  return (
    <footer className="lp-footer app-footer">
      <div className="container lp-footer__inner d-flex justify-content-between align-items-center">
        <div className="lp-footer__brand">
          <strong>MinimalBlog</strong>
          <div className="lp-footer__tag">Thoughts, tutorials & stories</div>
        </div>

        <div className="lp-footer__links d-flex gap-3 align-items-center">
          <a href="/" className="lp-footer__link">Home</a>
          <a href="/posts" className="lp-footer__link">Posts</a>
          <a href="/posts/create" className="lp-footer__link">Create</a>
        </div>
      </div>
      <div className="lp-footer__bottom text-center">© {new Date().getFullYear()} MinimalBlog. All rights reserved.</div>
    </footer>
  );
}
