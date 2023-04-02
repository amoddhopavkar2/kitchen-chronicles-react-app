import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Container from "react-bootstrap/Container";
import CurrentUser from "./users/current-user";
import ProtectedRoute from "./users/protected-route";
import PublicProfile from "./users/public-profile";
import Register from "./users/register";
import Login from "./users/login";
import Users from "./users";
import Profile from "./users/profile";
import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import MealDetails from "./meal-details";
import Blog from "./blog";
import BlogCreate from "./blog/blog-create";
import BlogDetails from "./blog/blog-details";
import ProtectedBlogCreate from "./blog/protected-blog-create";
import searchReducer from "./search/search-reducer";
import randomMealReducer from "./random-recipe/randomMealReducer";
import mealDetailsReducer from "./meal-details/meal-details-reducer";
import BlogReducer from "./blog/blog-reducer";
import usersReducer from "./users/users-reducer";
import reviewsReducer from "./reviews/reviews-reducer";
import followsReducer from "./follows/follows-reducer";

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
