import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../users/models";

let theme = localStorage.getItem("theme");
if (theme) {
  if (theme === "light" || theme === "dark");
  else theme = "light";
} else theme = "light";

const reducers = createSlice({
  name: [MODULE_NAME],
  initialState: {
    error: null,
    currentURL: window.location.pathname,
    previousURL: "/",
    success: null,
    openSideBar: false,
    theme, // may you have load light first,
    infor: null
  },
  reducers: {
    ERROR_FIREBASE: (state, action) => ({
      ...state,
      error: action.payload.message
    }),
    INFOR_FIREBASE: (state, action) => ({
      ...state,
      infor: action.payload.message
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
    CHANGE_THEME: (state, action) => {
      localStorage.setItem("theme", action.payload);
      return {
        ...state,
        theme: action.payload
      };
    },
    SET_PREVIOUS_URL: (state, action) => ({
      ...state,
      previousURL: state.previousURL,
      currentURL: action.payload
    }),
    CLEAR_INFO: state => ({
      ...state,
      infor: null
    })
  }
});

export const {
  ERROR_FIREBASE,
  SUCCESS_MESSAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_THEME,
  SET_PREVIOUS_URL,
  INFOR_FIREBASE,
  CLEAR_INFO
} = reducers.actions;

export default reducers;
