import { ScheduledEvent } from "@/infrastructure/ServiceAPI";
import "./ResultsSection.style.scss";

interface ResultsSectionProps {
  scheduledEvents: ScheduledEvent[];
  addEvent: (event: ScheduledEvent) => void;
}

function ResultsSection({ scheduledEvents, addEvent }: ResultsSectionProps) {
  return (
    <div className="ResultsSection">
      <div className="ResultsSection__topbar">
        <div className="ResultsSection__topbar__item ResultsSection__add"></div>
        <div className="ResultsSection__topbar__item ResultsSection__crn">
          CRN
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__subject">
          Subject
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__section">
          Section
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__title">
          Title
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__credit">
          Credits
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__type">
          Schedule
        </div>
        <div className="ResultsSection__topbar__item ResultsSection__instructor">
          Instructor
        </div>
      </div>
      <div className="ResultsSection__results">
        {scheduledEvents.map((event, index) => (
          <div
            key={index}
            className={`ResultsSection__result ${
              index % 2 === 0
                ? "ResultsSection__result--gray"
                : "ResultsSection__result--light-gray"
            }`}
          >
            <div className="ResultsSection__result__topbar">
              <div className="ResultsSection__add">
                <button onClick={() => addEvent(event)}>Add</button>
              </div>
              <div className="ResultsSection__crn">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.crn}
                </a>
              </div>
              <div className="ResultsSection__subject">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.subjectCode} {event.course.courseCode}
                </a>
              </div>
              <div className="ResultsSection__section">{event.section}</div>
              <div className="ResultsSection__title">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.shortTitle}
                </a>
              </div>
              <div className="ResultsSection__credit">{event.credit}</div>
              <div className="ResultsSection__type">{event.type}</div>
              <div className="ResultsSection__instructor">
                {event.instructor}
              </div>
            </div>
            <div className="ResultsSection__result__content">
              <div>
                <b>Days:</b> {event.days}, <b>Time:</b> {event.startTime} -{" "}
                {event.endTime}
              </div>
              <div>
                <b>Section Information:</b> {event.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsSection;
