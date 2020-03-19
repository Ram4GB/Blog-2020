import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

const reducers = createSlice({
  name: [MODULE_NAME],
  initialState: {
    user: null,
    isLogin: false
  },
  reducers: {
    LOGIN_SUCCESS: (state, action) => ({
      user: action.payload,
      isLogin: true
    }),
    LOGIN_FAIL: state => state,
    LOG_OUT_SUCCESS: () => ({
      user: null,
      isLogin: false
    }),
    LOG_OUT_FAIL: state => state
  }
});

export const { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT_SUCCESS, LOG_OUT_FAIL } = reducers.actions;

export default reducers;
