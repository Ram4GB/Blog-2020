import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import ReactMarkdown from "react-markdown";
import { EditFilled } from "@ant-design/icons";
import moment from "moment";
import { Avatar, Tag } from "antd";
import { useSelector } from "react-redux";
import { getBlog } from "../commons/utils/firebase";
import CodeBlock from "../commons/components/CodeBlock";
import { MODULE_NAME } from "../modules/users/models";

export default function BlogInformation() {
  const params = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState();
  const isAdmin = useSelector(state => state[MODULE_NAME].isAdmin);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getBlog("blogs", params.id);
      setBlog(result);
    };
    fetchAPI();
  });

  const handleEdit = () => {
    history.push(`/${params.id}/blog/edit`);
  };

  const renderTag = categories => {
    return categories.map((tag, index) => {
      return (
        <Tag
          // eslint-disable-next-line react/no-array-index-key
          key={`blog.id_${index}`}
          style={{ marginLeft: 5, textTransform: "uppercase" }}
          color="pink"
        >
          {tag}
        </Tag>
      );
    });
  };

  return (
    <div className="container">
      <div className="blog-information">
        <h1 className="title">
          <span>{blog ? blog.title : ""}</span>
          {isAdmin ? <EditFilled onClick={handleEdit} /> : ""}
          <div>{blog ? renderTag(blog.category) : ""}</div>
        </h1>
        <p className="author">
          <Avatar src="https://live.staticflickr.com/8076/8323936425_137d023a0f.jpg" />
          {blog ? ` ${blog.author}` : ""}
        </p>
        <p className="date">{blog ? moment(blog.date).format("MMMM Do YYYY") : ""}</p>
        <ReactMarkdown
          textAreaProps={{ style: { resize: "none" } }}
          renderers={{ code: CodeBlock }}
          source={blog ? blog.description : ""}
        />
      </div>
    </div>
  );
}
