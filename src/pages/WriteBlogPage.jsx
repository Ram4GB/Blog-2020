import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Input, notification } from "antd";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useHistory, useParams } from "react-router";
import { useForm } from "antd/lib/form/util";
import CodeBlock from "../commons/components/CodeBlock";
import { addBlogs, getBlog, editBlog } from "../commons/utils/firebase";

export default function WriteBlogPage() {
  const [input, setInput] = useState("");
  const [form] = useForm();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    let isCancelled = false;
    if (params.id) {
      const fetchData = async () => {
        if (!isCancelled) {
          const result = await getBlog("blogs", params.id);
          form.setFieldsValue(result);
          setInput(result.description);
        }
      };
      fetchData();
    }
    return () => {
      isCancelled = true;
    };
  }, [form, params.id]);

  const handleSubmit = async value => {
    if (!params || !params.id) {
      const author = "ram4gb";
      const date = new Date().toDateString();
      const category = "coding";
      await addBlogs("blogs", { ...value, author, date, category: [category] });
      notification.success({
        message: "Thêm thành công"
      });
      history.push("/");
    } else {
      const result = await editBlog("blogs", params.id, { ...value });
      if (result)
        notification.success({
          message: "Chỉnh sửa thành công"
        });
      history.push("/");
    }
  };

  const handleChange = makedownEditorValue => {
    setInput(makedownEditorValue);
  };

  return (
    <div className="container-90">
      <Row gutter={6}>
        <Col sm={24} md={24} lg={12}>
          <Form form={form} name="form-blog" className="form" onFinish={handleSubmit}>
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
