import { Central as Layout } from "@/layouts";
import { Timetable as TimetableView } from "@/components";
import { useEffect, useState } from "react";
import { ServiceAPI } from "@/infrastructure";
import { useParams } from "react-router-dom";
import { useAccountContext } from "@/context";
import { Timetable } from "@/infrastructure/ServiceAPI";
import { scheduledEventToCalendarBlock } from "@/utils";
import "./ViewTimetable.style.scss";

function ViewTimetable() {
  const { jwt } = useAccountContext();
  const { id } = useParams<{ id: string }>();
  const [timetable, setTimetable] = useState<Timetable | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const result = await ServiceAPI.fetchTimetable(id, jwt);
        setTimetable(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTimetable();
  }, []);

  if (!timetable) {
    return (
      <Layout title={"Student Timetable"}>
        <h3>{error || "Loading..."}</h3>
      </Layout>
    );
  }

  return (
    <Layout title={"Student Timetable"}>
      <TimetableView
        events={timetable.items.map((item: any) =>
          scheduledEventToCalendarBlock(item),
        )}
      />
    </Layout>
  );
}

export default ViewTimetable;
