import { ReactNode } from "react";
import "./CabinetSection.style.scss";

interface CabinetSectionProps {
  title: string;
  lineItems: ReactNode[];
}

function CabinetSection({ title, lineItems }: CabinetSectionProps) {
  return (
    <div className="CabinetSection">
      <img src="snorlax-sleepy.png"></img>
      <div>
        <div className="title">{title}</div>
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
