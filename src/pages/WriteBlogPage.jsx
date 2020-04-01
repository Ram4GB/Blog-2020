import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Input, notification, Select } from "antd";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useParams, useHistory } from "react-router";
import { useForm } from "antd/lib/form/util";
import { useDispatch, useSelector } from "react-redux";
import CodeBlock from "../commons/components/CodeBlock";
import { addBlogs, getBlog, editBlog } from "../commons/utils/firebase";
import * as actionsSagaBlog from "../modules/blogs/actions";
import { MODULE_NAME as MODULE_BLOG } from "../modules/blogs/models";

export default function WriteBlogPage() {
  const [input, setInput] = useState("");
  const [form] = useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const category = useSelector(state => state[MODULE_BLOG].category);
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
      const date = new Date();
      await addBlogs("blogs", { ...value, author, date });
      notification.success({
        message: "Thêm thành công"
      });
      window.location.assign("/");
    } else {
      const result = await editBlog("blogs", params.id, { ...value });
      if (result)
        notification.success({
          message: "Chỉnh sửa thành công"
        });
      history.goBack();
    }
  };

  const handleChange = makedownEditorValue => {
    setInput(makedownEditorValue);
  };

  useEffect(() => {
    dispatch(actionsSagaBlog.loadCategory("category"));
  }, [dispatch]);

  const renderCategory = () => {
    return category.map(item => {
      return (
        <Select.Option key={`category_${item.name}`} value={item.name}>
          {item.name}
        </Select.Option>
      );
    });
  };

  return (
    <div className="container-90 blog-editor">
      <Button onClick={() => history.goBack()} className="btn-back">
        Quay lại
      </Button>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col className="editor" sm={24} md={24} lg={24}>
          <Form form={form} name="form-blog" className="form" onFinish={handleSubmit}>
            <Form.Item label="Tiêu đề" name="title">
              <Input placeholder="Ghi tiêu đề..." />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Mời chọn danh mục"
                }
              ]}
              label="Mục"
              name="category"
            >
              <Select allowClear mode="multiple">
                {category ? renderCategory() : null}
              </Select>
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <ReactMde minEditorHeight="300px" maxEditorHeight="300px" onChange={handleChange} />
            </Form.Item>
            <Button className="button-submit" htmlType="submit">
              Xác nhận hoàn thành
            </Button>
          </Form>
        </Col>
        <Col className="previewer" lg={24}>
          <ReactMarkdown
            textAreaProps={{ style: { resize: "none" } }}
            renderers={{ code: CodeBlock }}
            source={input}
          />
        </Col>
      </Row>
    </div>
  );
}
