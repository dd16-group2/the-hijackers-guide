import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <div className="nav-container">
      <Link to="/the-hijackers-guide/guidelines">
        <div className="nav-button">
          <img alt="" src="./assets/navButton.svg" /> <div>HOME</div>{" "}
        </div>
      </Link>
      <Link to="/the-hijackers-guide/disclosure">
        <div className="nav-button">
          <img alt="" src="./assets/navButton.svg" /> <div>ABOUT</div>{" "}
        </div>
      </Link>
    </div>
  );
}

export default Nav;
