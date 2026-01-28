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
        error.response?.data || "Registration fail please try again",
      );
    }
  },
);
//----------------SignIn api call
export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post("/api/v1/signin", userData, config, {
        withCredentials: true,
      });
      console.log("Login Data:-", data);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Login fail please try again",
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
        state.user = null;
        state.isAuthenticated = false;
      });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload?.user || null;
        state.success = action.payload.success;
        state.isAuthenticated = Boolean(action.payload?.user);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login Error";
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { removeSuccess, removeError } = userSlice.actions;
export default userSlice.reducer;
