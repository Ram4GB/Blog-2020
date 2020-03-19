import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Col, Row } from "antd";
import { UserOutlined, CodeFilled } from "@ant-design/icons";
import * as actions from "../modules/users/actions";

export default function Loginpage() {
  const dispatch = useDispatch();

  const handleSubmit = value => {
    dispatch(actions.login(value));
  };

  const LoginWithGoogle = () => {
    dispatch(actions.loginWithGoogle());
  };

  const LoginWithFacebook = () => {
    dispatch(actions.loginWithFacebook());
  };

  const LoginWithGithub = () => {
    dispatch(actions.loginWithGithub());
  };

  return (
    <div className="container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Form autoComplete="off" onFinish={handleSubmit} className="form-login" layout="vertical">
        <Form.Item
          rules={[
            {
              required: true,
              message: "Mời điền email"
            }
          ]}
          label="Email"
          name="email"
        >
          <Input prefix={<UserOutlined />} autoComplete="off" placeholder="Địa chỉ Email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Mời điền mật khẩu"
            }
          ]}
          label="Mật khẩu"
          name="password"
        >
          <Input.Password prefix={<CodeFilled />} autoComplete="off" placeholder="Mật khẩu" />
        </Form.Item>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
        <Row>
          <Col lg={8}>
            <Button onClick={LoginWithGoogle}>Google</Button>
          </Col>
          <Col lg={8}>
            <Button onClick={LoginWithFacebook}>Facebook</Button>
          </Col>
          <Col lg={8}>
            <Button onClick={LoginWithGithub}>Github</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
