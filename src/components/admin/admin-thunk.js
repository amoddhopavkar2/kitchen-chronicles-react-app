import { createAsyncThunk } from "@reduxjs/toolkit";
import { userStats } from "../../services/admin-service";

export const userStatsThunk = createAsyncThunk(
  "userStats",
  async () => await userStats()
);
