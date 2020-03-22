import React from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import { useHistory } from "react-router";
import CodeBlock from "../../../commons/components/CodeBlock";

export default function BlogItem({ blog }) {
  const history = useHistory();
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
    <div onClick={() => history.push(`/${blog.id}/blog`)} className="blog-card">
      {renderTag(blog.category)}
      <h3>{blog.title}</h3>
      <h4>
        <img
          className="img-author"
          src="https://live.staticflickr.com/8076/8323936425_137d023a0f.jpg"
          alt=""
        />

        <span className="author">{blog.author}</span>
        <span className="date">{dayjs(new Date(blog.date)).format("MMMM D, YYYY")}</span>
        <div className="small-text">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={blog.description} />
        </div>
        <button type="button" className="read-more">
          Read more
        </button>
      </h4>
    </div>
  );
}

BlogItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blog: PropTypes.object
};

BlogItem.defaultProps = {
  blog: null
};
