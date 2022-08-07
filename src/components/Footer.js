import './css/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='box-container'>
        <div className='box'>
          <img
            src='https://myrage321.netlify.app/static/media/Logo.de291d516ca7db8f6e665461b86c6692.svg'
            alt=''
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscin eli a sit facilisis
            volutpat interdum non a magna tempus amet velit dolor sit.
          </p>
        </div>
        <div class='box'>
          <h3>Menu</h3>
          <a href='#' class='link'>
            home
          </a>
          <a href='#' class='link'>
            about
          </a>
          <a href='#' class='link'>
            pricing
          </a>
        </div>

        <div class='box'>
          <h3>support</h3>
          <a href='#' class='link'>
            partner
          </a>
          <a href='#' class='link'>
            health center
          </a>
          <a href='#' class='link'>
            support
          </a>
          <a href='#' class='link'>
            term of use
          </a>
        </div>

        <div class='box'>
          <h3>utility</h3>
          <a href='#' class='link'>
            style guide
          </a>
          <a href='#' class='link'>
            license
          </a>
          <a href='#' class='link'>
            password page
          </a>
          <a href='#' class='link'>
            404 page
          </a>
          <a href='#' class='link'>
            change log
          </a>
        </div>
      </div>
      <div class='credit'>
        {' '}
        created by <span>Techie Emma</span> | all rights reserved!{' '}
      </div>
    </div>
  );
};

export default Footer;
