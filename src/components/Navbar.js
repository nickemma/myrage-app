import './css/Navbar.css';
const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h3>MyRage</h3>
      </div>
      <nav className='navbar'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Pricing</a>
          </li>
          <li>
            <a href='/'>News</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
          <li>
            <a href='/'>book A Demo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
