import { createAsyncThunk } from "@reduxjs/toolkit";
import { createLike } from "../../services/likes-service";

export const userLikesFoodThunk = createAsyncThunk(
  "userLikesFood",
  async (like) => createLike(like)
);
