import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { darcula, atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MODULE_NAME as MODULE_UI } from "../../modules/ui/models";

export default function CodeBlock({ value, language }) {
  const theme = useSelector(state => state[MODULE_UI].theme);
  return (
    <SyntaxHighlighter style={theme === "light" ? darcula : atomDark} language={language}>
      {value}
    </SyntaxHighlighter>
  );
}

CodeBlock.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string
};

CodeBlock.defaultProps = {
  language: "",
  value: ""
};
