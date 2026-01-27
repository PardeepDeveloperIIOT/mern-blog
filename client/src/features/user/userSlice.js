import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//----------------- Register api call
export const register = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post("/api/v1/signup", userData, config, {
        withCredentials: true,
      });
      console.log("Registration Data", data);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "REgistration fail please try again",
      );
    }
  },
);
//------------------ Create slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: false,
    isAuthenticated: false,
    message: null,
  },
  reducers: {
    removeError: (state) => {
      state.error = null;
    },
    removeSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload?.user || null;
        state.success = action.payload.success;
        state.isAuthenticated = Boolean(action.payload?.user);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Signup Error";
      });
  },
});

export const { removeSuccess, removeError } = userSlice.actions;
export default userSlice.reducer;
