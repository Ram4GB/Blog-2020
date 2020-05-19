import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, CodeFilled, GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import * as actions from "../modules/users/actions";
import { MODULE_NAME } from "../modules/users/models";

export default function Loginpage() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state[MODULE_NAME].isLogin);
  const history = useHistory();
  const handleSubmit = value => {
    dispatch(actions.login(value));
  };

  const LoginWithGoogle = () => {
    dispatch(actions.loginWithGoogle());
  };

  const LoginWithFacebook = () => {
    dispatch(actions.loginWithFacebook());
  };

  useEffect(() => {
    if (isLogin) history.push("/");
  }, [isLogin, history]);

  return (
    <div className="container login-form">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Form autoComplete="off" onFinish={handleSubmit} className="form-login" layout="vertical">
        <Alert
          showIcon
          type="info"
          message="Đăng nhập chỉ dành cho tác giả. Bạn vẫn có thể sử dụng nó. Mình sẽ mở rộng sau này"
        />
        <Form.Item
          rules={[
            {
              required: true,
              message: "Mời điền email"
            },
            {
              type: "email",
              message: "Mời bạn điền email"
            }
          ]}
          label="Email"
          name="email"
        >
          <Input
            size="large"
            prefix={<UserOutlined />}
            autoComplete="off"
            placeholder="Địa chỉ Email"
          />
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
          <Input.Password
            size="large"
            prefix={<CodeFilled />}
            autoComplete="off"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          <Button size="large" className="button-google" onClick={LoginWithGoogle}>
            <GoogleOutlined />
          </Button>
          <Button disabled size="large" className="button-facebook" onClick={LoginWithFacebook}>
            <FacebookOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
