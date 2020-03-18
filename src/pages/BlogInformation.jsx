import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { getBlog } from "../commons/utils/firebase";
import CodeBlock from "../commons/components/CodeBlock";

export default function BlogInformation() {
  const params = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getBlog("blogs", params.id);
      setBlog(result);
    };
    fetchAPI();
  });

  return (
    <div className="container">
      <div className="blog-information">
        <h1 className="title">{blog.title}</h1>
        <ReactMarkdown
          textAreaProps={{ style: { resize: "none" } }}
          renderers={{ code: CodeBlock }}
          source={blog.description}
        />
      </div>
    </div>
  );
}
