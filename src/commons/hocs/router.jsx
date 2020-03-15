import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./MainLayout";
import Homepage from "../../pages/Homepage";
import AboutPage from "../../pages/AboutPage";

export default function Router() {
  const user = { role: "admin" };
  if (user) {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </MainLayout>
  );
}
