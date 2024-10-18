import { ReactNode } from "react";
import "./CabinetSection.style.scss";

interface CabinetSectionProps {
  title: string;
  lineItems: ReactNode[];
}

function CabinetSection({ title, lineItems }: CabinetSectionProps) {
  return (
    <div className="CabinetSection">
      <img src="cabinet.gif"></img>
      <div>
        <div>{title}</div>
        <ul>
          {lineItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CabinetSection;
