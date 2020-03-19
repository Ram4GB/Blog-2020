import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import ReactMarkdown from "react-markdown";
import { EditFilled } from "@ant-design/icons";
import { getBlog } from "../commons/utils/firebase";
import CodeBlock from "../commons/components/CodeBlock";

export default function BlogInformation() {
  const params = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState();

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

  return (
    <div className="container">
      <div className="blog-information">
        <h1 className="title">
          <span>{blog ? blog.title : ""}</span>
          <EditFilled onClick={handleEdit} />
        </h1>
        <ReactMarkdown
          textAreaProps={{ style: { resize: "none" } }}
          renderers={{ code: CodeBlock }}
          source={blog ? blog.description : ""}
        />
      </div>
    </div>
  );
}
