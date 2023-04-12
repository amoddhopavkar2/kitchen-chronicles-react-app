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
      "Aug",
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
            { name: MONTHS[item._id - 1], "New Users": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getStats();
  }, [MONTHS]);
  
  const monthlyUserStats = userStats.slice(0, 12);
  console.log(userStats);
  console.log(monthlyUserStats);
  return (
    <div className="home">
      <Chart data={monthlyUserStats} title="New Users" grid dataKey="New Users" />
    </div>
  );
};

export default AdminDashboard;
