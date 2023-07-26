import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { validateEmail } from "../../helpers/validateEmail";
import { postLogin } from "./postLogin";
import { userStore } from '../../store/userStore';

import "./LoginForm.less";

export const LoginForm = (props) => {

  const onFinish = async (values) => {
    const isEmail = validateEmail(values.username);
    const loginRes = await postLogin(
      isEmail ? null : values.username,
      isEmail ? values.username : null,
      values.password
    );
    if (loginRes) {
      userStore.setIsAdmin(loginRes);
      props.close(false);
      // Todo: show succes popup
    }
  };

  return (
    <div className="loginFormContainer">
      <div className="background" onClick={() => props.close(false)}></div>
      <div className="closeButton" onClick={() => props.close(false)}>
        <CloseOutlined />
      </div>
      <Form
        name="normal_login"
        className="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password ?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
