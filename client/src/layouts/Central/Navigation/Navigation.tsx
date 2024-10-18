import { Divider } from "../Divider";
import "./Navigation.style.scss";
import { Tab } from "./Tab";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="Navigation__tabs">
        <Tab label="Personal Information" highlighted={false} />
        <Tab label="Student Services" highlighted={false} />
        <Tab label="Employee Services" highlighted={false} />
        <Tab label="Financial Services" highlighted={false} />
      </div>
      <Divider />
    </div>
  );
}

export default Navigation;
