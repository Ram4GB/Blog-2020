import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import Lottie from "react-lottie";
import * as actionsSagaBlog from "../actions";
import { MODULE_NAME as MODULE_TODO } from "../models";
import BlogItem from "./BlogItem";
import empty from "../../../commons/assets/animations/empty.json";

export default function BlogList() {
  const blogs = useSelector(state => state[MODULE_TODO].blogs);
  const dispatch = useDispatch();
  const firstSnapShot = useSelector(state => state[MODULE_TODO].firstSnapShot);
  const lastSnapShot = useSelector(state => state[MODULE_TODO].lastSnapShot);

  const next = () => {
    dispatch(actionsSagaBlog.nextPage({ lastSnapShot, firstSnapShot }));
  };

  // const previous = () => {
  //   dispatch(actionsSagaBlog.previousPage(firstSnapShot));
  // };
  // console.log(location);
  // console.log(queryString.parse(location.search, { arrayFormat: "bracket" }));

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
      <div>{blogs ? renderBlogs() : null}</div>
      <div>
        {/* <Button onClick={previous} style={{ float: "left" }} className="pre">
          Trang sau
        </Button> */}
        <Button onClick={next} style={{ float: "right", width: "100%" }} className="next">
          Xem tiếp
        </Button>
      </div>
    </div>
  );
}
