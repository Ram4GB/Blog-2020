import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { MODULE_NAME as MODULE_TODO } from "../modules/blogs/models";
import { loadBlog } from "../modules/blogs/actions";

export default function Homepage() {
  const blogs = useSelector(state => state[MODULE_TODO].blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);

  const renderBlogs = () => {
    return blogs.map(blog => {
      return blog.title;
    });
  };

  return (
    <Row>
      <Col lg={7}>1</Col>
      <Col lg={10}>{blogs ? renderBlogs() : null}</Col>
      <Col lg={7}>1</Col>
    </Row>
  );
}
