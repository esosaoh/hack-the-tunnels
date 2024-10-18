import express, { Request, Response } from "express";
import { error, success } from "../utils";
import { AuthorizationService, TimetableService } from "../../services";

const router = express.Router();

const index = async (request: Request, response: Response) => {
  const authenticationResult = await AuthorizationService.emailFromToken(
    request.headers.authorization,
  );

  if (authenticationResult.err) {
    return error(response, {
      error: authenticationResult.val.message,
      statusCode: 401,
    });
  }

  const accountEmail = authenticationResult.val as string;

  const result = await TimetableService.getAccountTimetables(accountEmail);

  return success(response, {
    data: Array.isArray(result.val) ? result.val.map(serializeTimetable) : [],
    statusCode: 200,
  });
};

const create = async (request: Request, response: Response) => {
  const authenticationResult = await AuthorizationService.emailFromToken(
    request.headers.authorization,
  );

  if (authenticationResult.err) {
    return error(response, {
      error: authenticationResult.val.message,
      statusCode: 401,
    });
  }

  const accountEmail = authenticationResult.val as string;

  const result = await TimetableService.createTimetable(
    accountEmail,
    request.body.name,
    request.body.scheduledEventIds,
  );

  if (result.err) {
    return error(response, {
      error: result.val.message,
      statusCode: 400,
    });
  }

  return success(response, {
    data: result.val,
    statusCode: 201,
  });
};

const show = async (request: Request, response: Response) => {
  const authenticationResult = await AuthorizationService.emailFromToken(
    request.headers.authorization,
  );

  if (authenticationResult.err) {
    return error(response, {
      error: authenticationResult.val.message,
      statusCode: 401,
    });
  }

  const result = await TimetableService.getTimetableById(
    parseInt(request.params.id),
  );

  if (result.err) {
    return error(response, {
      error: result.val.message,
      statusCode: 404,
    });
  }

  return success(response, {
    data: serializeTimetable(result.val),
    statusCode: 200,
  });
};

router.get("/", index);
router.post("/", create);
router.get("/:id", show);

export default router;

interface TimetableSerializer {
  id: number;
  name: string;
  items: {
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
  };
}

const serializeTimetable = (timetable: any): TimetableSerializer => {
  return {
    id: timetable.id,
    name: timetable.name,
    items: timetable.timetableEvents.map((item) => {
      return {
        id: item.scheduledEvent.id,
        crn: item.scheduledEvent.crn,
        section: item.scheduledEvent.section,
        instructor: item.scheduledEvent.instructor,
        credit: item.scheduledEvent.credit,
        type: item.scheduledEvent.type,
        term: item.scheduledEvent.term,
        days: item.scheduledEvent.days,
        startTime: item.scheduledEvent.startTime,
        endTime: item.scheduledEvent.endTime,
        additionalRegistrationRequirements:
          item.scheduledEvent.additionalRegistrationRequirements,
        url: item.scheduledEvent.url,
        description: item.scheduledEvent.description,
        courseId: item.scheduledEvent.courseId,
        course: {
          id: item.scheduledEvent.course.id,
          subjectCode: item.scheduledEvent.course.subjectCode,
          courseCode: item.scheduledEvent.course.courseCode,
          title: item.scheduledEvent.course.title,
          shortTitle: item.scheduledEvent.course.shortTitle,
          description: item.scheduledEvent.course.description,
        },
      };
    }),
  };
};
