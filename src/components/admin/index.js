import React, { useEffect, useMemo, useState } from "react";
import Chart from "./chart";
import axios from "axios";

const BASE_API_URL = process.env.REACT_API_BASE || "http://localhost:4000";

function AdminDashboard() {
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
  const api = axios.create({ withCredentials: true });
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await api.get(`${BASE_API_URL}/stats`);
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

  // const initialReviews = [
  //   { id: 1, text: "This product is great!", rating: 5 },
  //   { id: 2, text: "I had a terrible experience with this company.", rating: 2 },
  //   { id: 3, text: "The service was amazing!", rating: 4 },
  // ];

  // const initialBlogs = [
  //   { id: 1, title: "10 Ways to Improve Your Marketing Strategy", author: "John Doe" },
  //   { id: 2, title: "The Benefits of Meditation for Productivity", author: "Jane Smith" },
  //   { id: 3, title: "The Top 5 Destinations for Adventure Travel", author: "Bob Johnson" },
  // ];

  const [reviews, setReviews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("http://localhost:4000/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("http://localhost:4000/blog").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const handleReviewDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  const handleBlogDelete = (id) => {
    api
      .delete(`http://localhost:4000/blog/${id}`)
      .then(() => {
        const updatedBlogs = blogs.filter((blog) => blog._id !== id);
        setBlogs(updatedBlogs);
      })
      .catch((error) => {
        console.error(`Error deleting blog with id ${id}: ${error.message}`);
      });
  };

  return (
    <div className="home">
      <Chart
        data={monthlyUserStats}
        title="Monthly New Users"
        grid
        dataKey="New Users"
      />
      <div className="reviews">
        <h2>All Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>Rating: {review.rating}/5</p>
              <button onClick={() => handleReviewDelete(review.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="blogs">
        <h2>All Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h5>{blog.title}</h5>
              <p>Author: {blog.author.authorName}</p>
              <p>{blog.blog}</p>
              <button onClick={() => handleBlogDelete(blog._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
