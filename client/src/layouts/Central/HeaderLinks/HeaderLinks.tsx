import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";
interface HeaderLinksProps {
  darkMode: boolean;
}
function HeaderLinks({ darkMode=false }: HeaderLinksProps) {
  const { logout } = useAccountContext();
  return (
    <div className={`HeaderLinks ${darkMode ? "dark" : ""}`}>
      <img src="home.png"></img>
      <Link to={"/"}>Return To Menu</Link>|
      <img src="map.png"></img>
      <Link to={"/sitemap"}>Site Map</Link>
      |<img src="help.png"></img>
      <Link to={"/help"}>Help</Link>|
      <img src="logout.png"></img>
      <Link to={"/login"}>
        <span onClick={() => logout()}>Logout</span>
      </Link>
    </div>
  );
}

export default HeaderLinks;
