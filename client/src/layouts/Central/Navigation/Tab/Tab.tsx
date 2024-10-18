import "./Tab.style.scss";

interface TabProps {
  label: string;
  highlighted: boolean;
}

function Tab({ label, highlighted }: TabProps) {
  return (
    <div className="Tab">
      <div className="Tab__left"></div>
      <div className="Tab__label">{label}</div>
      <div className="Tab__right"></div>
    </div>
  );
}

export default Tab;
