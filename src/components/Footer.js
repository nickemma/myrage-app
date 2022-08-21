import './css/Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="box-container">
      <div className="box">
        <img
          src="https://myrage321.netlify.app/static/media/Logo.de291d516ca7db8f6e665461b86c6692.svg"
          alt="Logo"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscin eli a sit facilisis
          volutpat interdum non a magna tempus amet velit dolor sit.
        </p>
      </div>
      <div className="box">
        <h3>Menu</h3>
        <a href="/" className="link">
          home
        </a>
        <a href="/" className="link">
          about
        </a>
        <a href="/" className="link">
          pricing
        </a>
      </div>

      <div className="box">
        <h3>support</h3>
        <a href="/" className="link">
          partner
        </a>
        <a href="/" className="link">
          health center
        </a>
        <a href="/" className="link">
          support
        </a>
        <a href="/" className="link">
          term of use
        </a>
      </div>

      <div className="box">
        <h3>utility</h3>
        <a href="/" className="link">
          style guide
        </a>
        <a href="/" className="link">
          license
        </a>
        <a href="/" className="link">
          password page
        </a>
        <a href="/" className="link">
          404 page
        </a>
        <a href="/" className="link">
          change log
        </a>
      </div>
    </div>
    <div className="credit">
      {' '}
      created by
      {' '}
      <span>Techie Emma</span>
      {' '}
      | all rights reserved!
      {' '}
    </div>
  </div>
);

export default Footer;
