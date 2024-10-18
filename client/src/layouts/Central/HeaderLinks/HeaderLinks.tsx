import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <div className="HeaderLinks">
      <Link to={"/"}>Return To Menu</Link>|<Link to={"/sitemap"}>Site Map</Link>
      |<Link to={"/help"}>Help</Link>|
      <Link to={"/login"}>
        <span onClick={() => logout()}>Logout</span>
      </Link>
    </div>
  );
}

export default HeaderLinks;
