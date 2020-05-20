import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { I18nextProvider } from "react-i18next";
import Router from "./router";
import { onAuthStateChanged } from "../utils/firebase";
import { LOGIN_SUCCESS, LOG_OUT_SUCCESS } from "../../modules/users/reducers";
import i18n from "../utils/i18n";

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
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </BrowserRouter>
    </>
  );
}

export default MainPage;
