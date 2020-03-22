import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

const reducer = createSlice({
  name: MODULE_NAME,
  initialState: {
    blogs: [],
    error: null,
    category: []
  },
  reducers: {
    REDUCER_LOAD_BLOG_SUCCESS: (state, action) => ({
      ...state,
      blogs: action.payload
    }),
    REDUCER_LOAD_BLOG_FAIL: (state, action) => ({
      ...state,
      error: action.payload
    }),
    GET_ALL_CATEGORY_SUCCESS: (state, action) => ({
      ...state,
      category: action.payload
    })
  }
});

export const {
  REDUCER_LOAD_BLOG_SUCCESS,
  REDUCER_LOAD_BLOG_FAIL,
  GET_ALL_CATEGORY_SUCCESS
} = reducer.actions;

export default reducer;
