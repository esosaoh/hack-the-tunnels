export interface ScheduledEvent {
  id: number;
  crn: string;
  section: string;
  instructor: string;
  credit: string;
  type: string;
  term: string;
  days: string;
  startTime: string;
  endTime: string;
  additionalRegistrationRequirements: string;
  url: string;
  description: string;
  courseId: number;
  course: {
    id: number;
    subjectCode: string;
    courseCode: string;
    title: string;
    shortTitle: string;
    description: string;
  };
}

export const fetchScheduledEvents = async (): Promise<ScheduledEvent[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/scheduledEvents`,
  );
  const json = await response.json();

  if (json.error) {
    throw new Error(json.error);
  }

  const data = formatScheduledEvents(json.data);
  return data;
};

const formatScheduledEvents = (events: any[]): ScheduledEvent[] => {
  return events.map((event) => {
    return {
      id: event.id,
      crn: event.crn,
      section: event.section,
      instructor: event.instructor,
      credit: event.credit,
      type: event.type,
      term: event.term,
      days: event.days,
      startTime: event.startTime,
      endTime: event.endTime,
      additionalRegistrationRequirements:
        event.additionalRegistrationRequirements,
      url: event.url,
      description: event.description,
      courseId: event.courseId,
      course: {
        id: event.course.id,
        subjectCode: event.course.subjectCode,
        courseCode: event.course.courseCode,
        title: event.course.title,
        shortTitle: event.course.shortTitle,
        description: event.course.description,
      },
    };
  });
};
