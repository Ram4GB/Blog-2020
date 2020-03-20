import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../users/models";

const reducers = createSlice({
  name: [MODULE_NAME],
  initialState: {
    error: null,
    currentURL: "",
    success: null,
    openSideBar: false,
    theme: "light" // may you have load light first
  },
  reducers: {
    ERROR_FIREBASE: (state, action) => ({
      ...state,
      error: action.payload.message
    }),
    REDIRECT_URL: (state, action) => ({
      ...state,
      currentURL: action.payload
    }),
    SUCCESS_MESSAGE: (state, action) => ({
      ...state,
      success: action.payload
    }),
    OPEN_SIDEBAR: state => ({
      ...state,
      openSideBar: true
    }),
    CLOSE_SIDEBAR: state => ({
      ...state,
      openSideBar: false
    }),
    CHANGE_THEME: (state, action) => ({
      ...state,
      theme: action.payload
    })
  }
});

export const {
  ERROR_FIREBASE,
  REDIRECT_URL,
  SUCCESS_MESSAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_THEME
} = reducers.actions;

export default reducers;
