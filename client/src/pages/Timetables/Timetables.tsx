import { Central as Layout } from "@/layouts";
import { useEffect, useState } from "react";
import { ServiceAPI } from "@/infrastructure";
import { Link } from "react-router-dom";
import { useAccountContext } from "@/context";
import { Timetable } from "@/infrastructure/ServiceAPI";
import "./Timetables.style.scss";

function Timetables() {
  const { jwt } = useAccountContext();
  const [timetables, setTimetables] = useState<Timetable[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const result = await ServiceAPI.fetchTimetables(jwt);
        setTimetables(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTimetables();
  }, []);

  return (
    <Layout title={"Timetables"}>
      <div className="Timetables">
        <h3>{error}</h3>
        {timetables.map((timetable) => (
          <Link to={`/timetables/${timetable.id}`} key={timetable.id}>
            <h4>{timetable.name}</h4>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Timetables;
