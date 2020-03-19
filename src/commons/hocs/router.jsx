import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "./MainLayout";
import Homepage from "../../pages/Homepage";
import AboutPage from "../../pages/AboutPage";
import WriteBlogPage from "../../pages/WriteBlogPage";
import BlogInformation from "../../pages/BlogInformation";
import Loginpage from "../../pages/LoginPage";
import { MODULE_NAME } from "../../modules/users/models";
import NotFoundPage from "../../pages/NotFoundPage";

export default function Router() {
  const isLogin = useSelector(state => state[MODULE_NAME].isLogin);

  if (isLogin) {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/write_blog" component={WriteBlogPage} />
          <Route exact path="/:id/blog/edit" component={WriteBlogPage} />
          <Route exact path="/:id/blog" component={BlogInformation} />
          <Route exact path="*" component={NotFoundPage} />
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
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </MainLayout>
  );
}
