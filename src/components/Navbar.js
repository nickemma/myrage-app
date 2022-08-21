import './css/Navbar.css';

const Navbar = () => (
  <header className="header">
    <div className="logo">
      <img
        src="https://myrage321.netlify.app/static/media/Logo.de291d516ca7db8f6e665461b86c6692.svg"
        alt=""
      />
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">book A Demo</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
