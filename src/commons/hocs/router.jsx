import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./MainLayout";
import Homepage from "../../pages/Homepage";
import AboutPage from "../../pages/AboutPage";
import WriteBlogPage from "../../pages/WriteBlogPage";
import BlogInformation from "../../pages/BlogInformation";

export default function Router() {
  const user = null;
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
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/write_blog" component={WriteBlogPage} />
        <Route exact path="/:id/blog/edit" component={WriteBlogPage} />
        <Route exact path="/:id/blog" component={BlogInformation} />
      </Switch>
    </MainLayout>
  );
}
