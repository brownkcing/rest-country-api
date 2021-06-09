import * as style from "./navbar.module.scss";
import ToggleMode from "./light-dark-mode/Toggle";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <div className={style.container}>
        {location.pathname === "/" ? (
          <h1 className={style.navtitle}>Countries Card View</h1>
        ) : (
          <h1 className={style.navtitle}>Country Details</h1>
        )}
        <ToggleMode />
      </div>
    </nav>
  );
}

export default Navbar;
