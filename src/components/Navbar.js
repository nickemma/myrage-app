const Navbar = () => {
  return (
    <nav className='nav'>
      <h2>MyRage</h2>
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
        <button type='button'>book a demo</button>
      </ul>
    </nav>
  );
};

export default Navbar;
