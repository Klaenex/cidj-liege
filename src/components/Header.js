import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <header>
      <nav>
        <h1>
          <Link className="link link_title" to="/">
            CIDJ-liege
          </Link>
        </h1>
        <div>
          <Link to="/services">Services</Link>
          <Link to="/animations">Animations</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
