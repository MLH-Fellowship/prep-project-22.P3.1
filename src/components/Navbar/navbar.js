import './navbar.css';

function Navbar(props) {
  const { src } = props;
  return (
    <nav className="navbar">
      <img className="logo" src={src} alt="MLH Prep Logo" />
      <ul className="navlist">
        <li className="navlist-link">Weather News</li>
        <li className="navlist-link">Tell Me Weather</li>
        <li className="navlist-link">News</li>
        <li className="navlist-link">Songs</li>
      </ul>
    </nav>
  );
}

export default Navbar;
