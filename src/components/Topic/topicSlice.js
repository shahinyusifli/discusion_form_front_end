import { createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import authHeader from "../../services/Auth/auth-header";
import axios from "axios";

export const fetchTopics = createAsyncThunk(
  "topics/fetchTopics", async () => {
     try {
        const response = await axios.get("/topic/get", { headers: authHeader() })//where you want to fetch data
        return await response.data;
      } catch (error) {
         return error.message;
      }
});

const topicsSlice = createSlice({
   name: "topics",
   initialState: {
      topics: [],
      loading: "idle",
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchTopics.pending, (state, action) => {
          state.loading = "loading";
      })
      .addCase(
         fetchTopics.fulfilled, (state, action) => {
            const loadedTopics = action.payload
            state.loading = "loaded";

            state.topics = state.topics.concat(loadedTopics)
      })
      .addCase(
        fetchTopics.rejected,(state, action) => {
            state.loading = "failed";
            state.error = action.error.message;
      });
   }
});

export const selectTopics = (state) => state.topics.topics;
export const getTopicsStatus = (state) => state.topics.loading;
export const getTopicsError = (state) => state.topics.error;
export default topicsSlice.reducer;