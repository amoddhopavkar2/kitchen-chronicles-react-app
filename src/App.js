import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Container from "react-bootstrap/Container";
import CurrentUser from "./components/users/current-user";
import ProtectedRoute from "./components/users/protected-route";
import PublicProfile from "./components/users/public-profile";
import Register from "./components/users/register";
import Login from "./components/users/login";
import Users from "./components/users";
import Profile from "./components/users/profile";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Search from "./components/search";
import MealDetails from "./components/meal-details";
import Blog from "./components/blog";
import BlogCreate from "./components/blog/blog-create";
import BlogDetails from "./components/blog/blog-details";
import ProtectedBlogCreate from "./components/blog/protected-blog-create";
import searchReducer from "./components/search/search-reducer";
import randomMealReducer from "./components/random-recipe/randomMealReducer";
import mealDetailsReducer from "./components/meal-details/meal-details-reducer";
import BlogReducer from "./components/blog/blog-reducer";
import usersReducer from "./components/users/users-reducer";
import reviewsReducer from "./components/reviews/reviews-reducer";
import followsReducer from "./components/follows/follows-reducer";
import AdminDashboard from "./components/admin";
import ProtectedAdminDashboard from "./components/admin/protected-admin-dashboard";

const store = configureStore({
  reducer: {
    search: searchReducer,
    randomMeals: randomMealReducer,
    mealDetails: mealDetailsReducer,
    blog: BlogReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    follows: followsReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CurrentUser>
          <Navbar />
          <Container className={"mt-3 mb-3"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/:searchName" element={<Search />} />
              <Route path="/meal/details/:mid" element={<MealDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="/admin"
                element={
                  <ProtectedAdminDashboard>
                    <AdminDashboard />
                  </ProtectedAdminDashboard>
                }
              />
              <Route
                path="/blog/create"
                element={
                  <ProtectedBlogCreate>
                    <BlogCreate />
                  </ProtectedBlogCreate>
                }
              />
              <Route path="/blog/details/:bid" element={<BlogDetails />} />
              <Route path="/users" element={<Users />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/profile/:uid" element={<PublicProfile />} />
            </Routes>
          </Container>
        </CurrentUser>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
