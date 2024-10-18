import { prisma } from "../db";

const workshop = async () => {
  const courses = await prisma.course.findMany({
    where: {
      subjectCode: {
        contains: "COMP",
      },
    },
  });

  courses.forEach((course) => {
    console.log(course);
  });
};

workshop();
