import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  LockOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";

import { validateEmail } from "../../helpers/validateEmail";
import { userStore } from "../../store/userStore";
import { postLogin } from "./postLogin";
import { postEmailExist } from "./postEmailExist";
import { postSendRecoverLink } from "./postSendRecoverLink";

import "./LoginForm.less";

export const LoginForm = (props) => {
  const [isloading, setIsLoading] = useState(false);
  const [emailDoNotExist, setEmailDoNotExist] = useState(undefined);
  const [showRecoverPwdForm, setShowRecoverPwdForm] = useState(false);
  const onFinish = async (values) => {
    const isEmail = validateEmail(values.username);
    try {
      const loginRes = await postLogin(
        isEmail ? null : values.username,
        isEmail ? values.username : null,
        values.password
      );
      if (loginRes.access) {
        userStore.setIsAdmin(loginRes.access);
        notification.open({
          message: "Login was sucessfull!",
          placement: "topRight",
          className: "blackNotification",
          duration: 3,
          icon: <CheckCircleOutlined style={{ color: "green" }} />,
        });
        props.close(false);
      }
    } catch (e) {
      notification.error({
        message: e.response.data.result.error,
        placement: "topRight",
        className: "blackNotification",
        duration: 3,
        icon: <CloseCircleOutlined style={{ color: "red" }} />,
      });
    }
  };

  const recover = async (values) => {
    const email = values.email.toLowerCase();
    const emailExist = await postEmailExist(email);
    if (emailExist === false) {
      setEmailDoNotExist("error");
    } else {
      setEmailDoNotExist("success");
      try {
        await postSendRecoverLink(email);
        notification.success({
          message: t("login.recoverEmailSent"),
          placement: "topRight",
          className: "blackNotification",
        });
        props.setIsRecovery(false);
      } catch (error) {
        notification.warn({
          message: error.message,
          placement: "topRight",
          className: "blackNotification",
        });
      }
    }
  };

  const onRecoverEmailChange = async (value) => {
    if (emailDoNotExist === "error") {
      const emailExist = await postEmailExist(value.target.value);
      if (emailExist === true) {
        setEmailDoNotExist(null);
      }
    }
  };

  return (
    <div className="loginFormContainer">
      <div className="background" onClick={() => props.close(false)}></div>
      <div className="closeButton" onClick={() => props.close(false)}>
        <CloseOutlined />
      </div>
      {showRecoverPwdForm ? (
        <Form
          name="recover"
          className="loginForm"
          initialValues={{ email: 123 }}
          onFinish={recover}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
              onChange={onRecoverEmailChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={emailDoNotExist === "error" ? true : false}
            >
              {emailDoNotExist === "error"
                ? "This email does not exist!"
                : "Send password reset email"}
            </Button>
          </Form.Item>
          <a
            className="login-form-forgot"
            onClick={() => setShowRecoverPwdForm(false)}
          >
            <ArrowLeftOutlined /> <span>Its okay, I remember now</span>
          </a>
        </Form>
      ) : (
        <Form name="normal_login" className="loginForm" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username or email"
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
          <a
            className="login-form-forgot"
            onClick={() => setShowRecoverPwdForm(true)}
          >
            Forgot password?
          </a>
        </Form>
      )}
    </div>
  );
};
