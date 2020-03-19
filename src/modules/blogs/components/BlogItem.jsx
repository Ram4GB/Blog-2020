import React from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";
import { useHistory } from "react-router";
import moment from "moment";
import ReactMarkdown from "react-markdown";
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
    <div className="blog-card">
      {renderTag(blog.category)}
      <h3>{blog.title}</h3>
      <h4>
        <img
          className="img-author"
          src="https://live.staticflickr.com/8076/8323936425_137d023a0f.jpg"
          alt=""
        />

        <span className="author">{blog.author}</span>
        <span className="date">{moment(new Date(blog.date)).format("MMMM Do YYYY")}</span>
        <div className="small-text">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={blog.description} />
        </div>
        <button
          type="button"
          onClick={() => history.push(`/${blog.id}/blog`)}
          className="read-more"
        >
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
