import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

const uid = ["DLfYXSeopuQQWqLsitrPUgDR8Ri2", "xCCUSbJAofc2AsIFPhjxJjAKP6f1"];

const reducers = createSlice({
  name: [MODULE_NAME],
  initialState: {
    user: null,
    isLogin: false,
    isAdmin: false
  },
  reducers: {
    LOGIN_SUCCESS: (state, action) => ({
      ...state,
      user: action.payload,
      isLogin: true,
      isAdmin: uid.indexOf(action.payload.uid) !== -1
    }),
    LOGIN_FAIL: state => state,
    LOG_OUT_SUCCESS: state => ({
      ...state,
      user: null,
      isLogin: false
    }),
    LOG_OUT_FAIL: state => state
  }
});

export const { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT_SUCCESS, LOG_OUT_FAIL } = reducers.actions;

export default reducers;
