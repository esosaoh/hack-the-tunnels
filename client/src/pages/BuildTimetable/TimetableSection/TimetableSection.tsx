import { CalendarBlock, Timetable } from "@/components";
import "./TimetableSection.style.scss";

interface TimetableSectionProps {
  selectedEvents: CalendarBlock[];
}

function TimetableSection({ selectedEvents }: TimetableSectionProps) {
  return (
    <div className="TimetableSection">
      <Timetable events={selectedEvents} />
    </div>
  );
}

export default TimetableSection;
