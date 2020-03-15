import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "./router";

function MainPage() {
  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
}

export default MainPage;
