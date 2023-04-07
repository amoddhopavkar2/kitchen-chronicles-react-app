import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminStats } from "../../services/admin-service";

export const adminStatsThunk = createAsyncThunk(
  "adminStats",
  async () => await adminStats()
);
