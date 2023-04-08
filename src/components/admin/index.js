import { useEffect, useMemo, useState } from "react";
import Chart from "./chart";
import axios from "axios";

const BASE_API_URL = process.env.REACT_API_BASE || "http://localhost:4000";

const AdminDashboard = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`${BASE_API_URL}/stats`);
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(userStats);
  return (
    <div className="home">
      <Chart data={userStats} title="New Users" grid dataKey="New User" />
    </div>
  );
};

export default AdminDashboard;
