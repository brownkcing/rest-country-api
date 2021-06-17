import * as style from "./navbar.module.scss";
import ToggleMode from "./light-dark-mode/Toggle";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ContextApiCountry } from "../../context/FetchData";


function Navbar() {
  const location = useLocation();
  const {themeName} = useContext(ContextApiCountry);
  
  const [theme, setTheme] = themeName;

  return (
    <nav className={`${theme == 'dayMode' && style.dark}`}>
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
