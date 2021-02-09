import { Link, useLocation } from "react-router-dom";
import { ReactComponent as NavButton } from "../navButton.svg";

function Nav() {
  const location = useLocation();
  return (
    <div className="nav-container">
      {location.pathname === "/the-hijackers-guide/about" && (<Link to="/the-hijackers-guide/guidelines">
        <div className="nav-button">
          <NavButton />{" "}
          <div>HOME</div>{" "}
        </div>
      </Link>)}
      {location.pathname !== "/the-hijackers-guide/about" &&(<Link to="/the-hijackers-guide/about">
        <div className="nav-button">
          <NavButton />{" "}
          <div>ABOUT</div>{" "}
        </div>
      </Link>)}
    </div>
  );
}

export default Nav;
