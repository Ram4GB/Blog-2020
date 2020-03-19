import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../users/models";

const reducers = createSlice({
  name: [MODULE_NAME],
  initialState: {
    error: null,
    currentURL: "",
    success: null
  },
  reducers: {
    ERROR_FIREBASE: (state, action) => ({
      error: action.payload.message
    }),
    REDIRECT_URL: (state, action) => ({
      currentURL: action.payload
    }),
    SUCCESS_MESSAGE: (state, action) => ({
      success: action.payload
    })
  }
});

export const { ERROR_FIREBASE, REDIRECT_URL, SUCCESS_MESSAGE } = reducers.actions;

export default reducers;
