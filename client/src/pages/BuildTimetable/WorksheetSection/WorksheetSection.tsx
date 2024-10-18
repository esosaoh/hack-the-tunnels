import { ScheduledEvent } from "@/infrastructure/ServiceAPI";
import "./WorksheetSection.style.scss";
interface WorksheetSectionProps {
  selectedEvents: ScheduledEvent[];
  removeEvent: (event: ScheduledEvent) => void;
  createTimetable: () => void;
}

function WorksheetSection({
  selectedEvents,
  removeEvent,
  createTimetable,
}: WorksheetSectionProps) {
  return (
    <div className="WorksheetSection">
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Status</th>
            <th>CRN</th>
            <th>Course</th>
            <th>Title</th>
            <th>Meeting Time</th>
            <th>Credits</th>
            <th>Warnings</th>
          </tr>
        </thead>
        <tbody>
          {selectedEvents.map((event, index) => (
            <tr key={index}>
              <td>
                <button
                  onClick={() => {
                    removeEvent(event);
                  }}
                >
                  Remove
                </button>
              </td>
              <td>unavailable</td>
              <td>
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.crn}
                </a>
              </td>
              <td>
                {event.course.subjectCode} {event.course.courseCode}{" "}
                {event.section}
              </td>

              <td>
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.shortTitle}
                </a>
              </td>
              <td>
                {event.days} {event.startTime} - {event.endTime}
              </td>
              <td>{event.credit}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={createTimetable}>Create Timetable</button>
    </div>
  );
}

export default WorksheetSection;
