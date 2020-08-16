import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

const reducer = createSlice({
  name: MODULE_NAME,
  initialState: {
    blogs: [],
    error: null,
    category: [],
    firstSnapShot: null,
    lastSnapShot: null,
    query: null
  },
  reducers: {
    REDUCER_LOAD_BLOG_SUCCESS: (state, action) => ({
      ...state,
      blogs: [...state.blogs, ...action.payload.data],
      query: action.payload.query
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
  GET_ALL_CATEGORY_SUCCESS,
  SET_PAGE
} = reducer.actions;

export default reducer;
