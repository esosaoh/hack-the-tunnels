import "./style.scss";

interface ComponentProps {
  label: string;
}

function Component({ label }: ComponentProps) {
  return (
    <div className="Component">
      <h3>{label}</h3>
    </div>
  );
}

export default Component;
