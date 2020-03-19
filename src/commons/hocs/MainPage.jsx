import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Router from "./router";
import { onAuthStateChanged } from "../utils/firebase";
import { LOGIN_SUCCESS, LOG_OUT_SUCCESS } from "../../modules/users/reducers";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = user => {
      if (user) dispatch(LOGIN_SUCCESS(user));
      else dispatch(LOG_OUT_SUCCESS());
    };
    onAuthStateChanged(getUser);
  });

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default MainPage;
