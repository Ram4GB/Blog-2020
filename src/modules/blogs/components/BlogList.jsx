import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import Lottie from "react-lottie";
import { useTranslation } from "react-i18next";
import * as actionsSagaBlog from "../actions";
import { MODULE_NAME as MODULE_TODO } from "../models";
import BlogItem from "./BlogItem";
import empty from "../../../commons/assets/animations/empty.json";

export default function BlogList() {
  const blogs = useSelector(state => state[MODULE_TODO].blogs);
  const dispatch = useDispatch();
  const firstSnapShot = useSelector(state => state[MODULE_TODO].firstSnapShot);
  const lastSnapShot = useSelector(state => state[MODULE_TODO].lastSnapShot);
  const { t } = useTranslation();

  const next = () => {
    dispatch(actionsSagaBlog.nextPage({ lastSnapShot, firstSnapShot }));
  };

  useEffect(() => {
    if (blogs.length === 0) dispatch(actionsSagaBlog.loadBlog());
  }, [dispatch, blogs.length]);

  const renderBlogs = () => {
    if (blogs.length > 0)
      return blogs.map(blog => {
        return <BlogItem blog={blog} key={blog.id} />;
      });
    return (
      <Lottie
        width="100%"
        height={500}
        options={{
          animationData: empty
        }}
        isPaused={false}
      />
    );
  };
  return (
    <div>
      <div>{blogs ? <div className="blog-list-container">{renderBlogs()}</div> : null}</div>
      <div>
        <Button onClick={next} style={{ float: "right", width: "100%" }} className="next">
          {t("loadmore")}
        </Button>
      </div>
    </div>
  );
}
