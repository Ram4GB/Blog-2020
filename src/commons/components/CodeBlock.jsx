import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React from "react";
import PropTypes from "prop-types";

export default function CodeBlock({ value, language }) {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
}

CodeBlock.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string
};

CodeBlock.defaultProps = {
  language: "",
  value: ""
};
