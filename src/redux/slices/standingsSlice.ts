import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { StandingsEntry, StandingsResponse } from "../../types";

const initialState = {
  loading: false,
  data: {} as StandingsEntry | null,
  error: "" as string | undefined,
};

export const fetchStandings = createAsyncThunk("standings", async () => {
  const url =
    "https://v3.football.api-sports.io/standings?league=39&season=2019";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "5224875c5198f5ba22daeeb66cbe2256",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
});

export const standingsSlice = createSlice({
  name: "standings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStandings.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchStandings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.error = "";
      }),
      builder.addCase(fetchStandings.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

const standingsReducer = standingsSlice.reducer;
export default standingsReducer;
