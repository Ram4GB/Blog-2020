import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, CodeFilled, GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import * as actions from "../modules/users/actions";
import { MODULE_NAME } from "../modules/users/models";

export default function Loginpage() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state[MODULE_NAME].isLogin);
  const history = useHistory();
  const { t } = useTranslation();
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
        <Alert showIcon type="info" message={t("warningLogin")} />
        <Form.Item
          rules={[
            {
              required: true,
              message: t("pleaseEnterEmail")
            },
            {
              type: "email",
              message: t("pleaseEnterEmail")
            }
          ]}
          label="Email"
          name="email"
        >
          <Input
            size="large"
            prefix={<UserOutlined />}
            autoComplete="off"
            placeholder={t("emailAddress")}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: t("pleaseEnterPassword")
            }
          ]}
          label={t("password")}
          name="password"
        >
          <Input.Password
            size="large"
            prefix={<CodeFilled />}
            autoComplete="off"
            placeholder={t("password")}
          />
        </Form.Item>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Form.Item>
          <Button size="middle" type="primary" htmlType="submit">
            {t("login")}
          </Button>
          <Button size="middle" className="button-google" onClick={LoginWithGoogle}>
            <GoogleOutlined />
          </Button>
          <Button disabled size="middle" className="button-facebook" onClick={LoginWithFacebook}>
            <FacebookOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
