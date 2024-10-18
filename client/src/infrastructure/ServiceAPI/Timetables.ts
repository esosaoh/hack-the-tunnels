import { ScheduledEvent } from "./ScheduledEvents";

export interface Timetable {
  id: number;
  name: string;
  items: ScheduledEvent[];
}

export const fetchTimetables = async (jwt: string): Promise<Timetable[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/timetables`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
    },
  );

  const json = await response.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.data.map(formatTimetable);
};

export const fetchTimetable = async (
  id: string,
  jwt: string,
): Promise<Timetable> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/timetables/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
    },
  );

  const json = await response.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return formatTimetable(json.data);
};

export const createTimetable = async (
  name: string,
  scheduledEventIds: string[],
  jwt: string,
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/timetables`,
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        scheduledEventIds: scheduledEventIds,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
    },
  );
  const json = await response.json();
  return json;
};

const formatTimetable = (timetable: any): Timetable => {
  return {
    id: timetable.id,
    name: timetable.name,
    items: timetable.items.map((event: any) => {
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
    }),
  };
};
