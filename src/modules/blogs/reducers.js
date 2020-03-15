import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

const reducer = createSlice({
  name: MODULE_NAME,
  initialState: {
    blogs: [],
    error: null
  },
  reducers: {
    REDUCER_LOAD_BLOG_SUCCESS: (state, action) => ({
      blogs: action.payload
    }),
    REDUCER_LOAD_BLOG_FAIL: (state, action) => ({
      error: action.payload
    })
  }
});

export const { REDUCER_LOAD_BLOG_SUCCESS, REDUCER_LOAD_BLOG_FAIL } = reducer.actions;

export default reducer;
