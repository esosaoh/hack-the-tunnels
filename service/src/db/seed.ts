import { prisma } from "../db";
import { AccountService } from "../services";
import fs from "fs";
import path from "path";

const seedAccounts = async () => {
  const admin = await AccountService.create(
    "admin@email.com",
    "password",
    "ADMIN",
  );
  const user = await AccountService.create("user@email.com", "password");
};

const seedCentralData = async () => {
  const coursesData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../../src/db/data/courses.json"),
      "utf-8",
    ),
  );

  // HACK: there are some courses with no title (bad data)
  const filteredCoursesData = coursesData.filter(
    (course: { title: any }) => course.title,
  );

  for (const course of filteredCoursesData) {
    await prisma.course.create({
      data: {
        title: course.title,
        description: course.description,
        shortTitle: course.shortTitle,
        subjectCode: course.subjectCode,
        courseCode: course.courseCode,
      },
    });
  }

  const eventsData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../../src/db/data/events.json"),
      "utf-8",
    ),
  );

  // HACK: there are some events with no title (bad data)
  const filteredEventsData = eventsData.filter(
    (event: { section: any; url: any }) => event.url && event.section,
  );

  for (const event of filteredEventsData) {
    const [subjectCode, courseCode] = event.code.split(" ");
    const course = await prisma.course.findFirst({
      where: {
        subjectCode: subjectCode,
        courseCode: courseCode,
      },
    });

    if (course) {
      await prisma.scheduledEvent.create({
        data: {
          crn: event.crn,
          section: event.section,
          term: event.term,
          credit: event.credit,
          type: event.type,
          instructor: event.instructor,
          days: event.days,
          startTime: event.startTime,
          endTime: event.endTime,
          additionalRegistrationRequirements:
            event.additionalRegistrationRequirements,
          url: event.url,
          description: event.description,
          course: {
            connect: {
              id: course.id,
            },
          },
        },
      });
    }
  }
};

seedAccounts();
seedCentralData();
