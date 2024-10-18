import { CalendarBlock, Days } from "@/components";
import { ScheduledEvent } from "@/infrastructure/ServiceAPI";

export const scheduledEventToCalendarBlock = (
  event: ScheduledEvent,
): CalendarBlock => {
  const adjustTime = (time: string): string => {
    const [hours, minutes] = time.split(":").map(Number);
    const adjustedMinutes = minutes < 30 ? "00" : "30";
    return `${hours.toString().padStart(2, "0")}:${adjustedMinutes}`;
  };

  let newStartTimeString = event.startTime;
  let newEndTimeString = event.endTime;

  if (!event.startTime.includes("NA") && !event.endTime.includes("NA")) {
    newStartTimeString = adjustTime(event.startTime);
    newEndTimeString = adjustTime(event.endTime);
  }

  const dayMap = {
    Mon: Days.Monday,
    Tue: Days.Tuesday,
    Wed: Days.Wednesday,
    Thu: Days.Thursday,
    Fri: Days.Friday,
    Sat: Days.Saturday,
    Sun: Days.Sunday,
  };

  const calendarBlock = {
    label: `${event.course.subjectCode} ${event.course.courseCode} ${event.section}`,
    days: event.days.split(",").map((day) => dayMap[day.trim()]),
    startTime: newStartTimeString,
    endTime: newEndTimeString,
  };

  return calendarBlock;
};
