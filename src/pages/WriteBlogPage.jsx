import React, { useState } from "react";
import { Form, Button, Row, Col, Input } from "antd";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useHistory } from "react-router";
import CodeBlock from "../commons/components/CodeBlock";
import { addBlogs } from "../commons/utils/firebase";

export default function WriteBlogPage() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSubmit = async value => {
    const author = "ram4gb";
    const date = new Date().toDateString();
    const category = "coding";
    await addBlogs("blogs", { ...value, author, date, category: [category] });
    history.push("/");
  };

  const handleChange = makedownEditorValue => {
    setInput(makedownEditorValue);
  };
  return (
    <div className="container-90">
      <Row gutter={6}>
        <Col sm={24} md={24} lg={12}>
          <Form className="form" onFinish={handleSubmit}>
            <Form.Item label="Tiêu đề" name="title">
              <Input placeholder="Ghi tiêu đề..." />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <ReactMde minEditorHeight="300px" maxEditorHeight="300px" onChange={handleChange} />
            </Form.Item>
            <Button htmlType="submit">Xác nhận hoàn thành</Button>
          </Form>
        </Col>
        <Col className="previewer" sm={24} md={24} lg={12}>
          <ReactMarkdown
            textAreaProps={{ style: { resize: "none" } }}
            renderers={{ code: CodeBlock }}
            source={input}
          />
          {/* <SyntaxHighlighter render language="javascript">
          123123123
        </SyntaxHighlighter> */}
        </Col>
      </Row>
    </div>
  );
}
