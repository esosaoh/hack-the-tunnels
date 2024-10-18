import "./Section.style.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="Section">
      <div className="Section__header">{title}</div>
      <div className="Section__content">{children}</div>
    </div>
  );
}

export default Section;
