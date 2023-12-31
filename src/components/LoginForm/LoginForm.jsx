import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  LockOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, notification, Spin } from "antd";
import { useTranslation } from "react-i18next";

import { validateEmail } from "../../helpers/validateEmail";
import { userStore } from "../../store/userStore";
import { postLogin } from "./postLogin";
import { postEmailExist } from "./postEmailExist";
import { postSendRecoverLink } from "./postSendRecoverLink";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

import "./LoginForm.less";

export const LoginForm = (props) => {
  const [isloading, setIsLoading] = useState(false);
  const [emailDoNotExist, setEmailDoNotExist] = useState(undefined);
  const [showRecoverPwdForm, setShowRecoverPwdForm] = useState(false);
  const { closable = true, showBackgroundImg = false } = props;
  const { t } = useTranslation();

  const onFinish = async (values) => {
    setIsLoading(true);
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
          message: t("login.loginSuccess"),
          placement: "topRight",
          className: "blackNotification",
          duration: 3,
          icon: <CheckCircleOutlined style={{ color: "green" }} />,
        });
        props.setHasAccess && props.setHasAccess(true);
        props.setShowLoginForm(false);
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
    setIsLoading(false);
  };

  const recover = async (values) => {
    setIsLoading(true);
    const email = values.email.toLowerCase();
    const emailExist = await postEmailExist(email);
    if (emailExist === false) {
      setEmailDoNotExist("error");
    } else {
      setEmailDoNotExist("success");
      try {
        await postSendRecoverLink(email);
        notification.success({
          message: t("loginRecover.recoverEmailSent"),
          placement: "topRight",
          className: "blackNotification",
        });
      } catch (error) {
        notification.error({
          message: error.message,
          placement: "topRight",
          className: "blackNotification",
        });
      }
      setShowRecoverPwdForm(false);
    }
    setIsLoading(false);
  };

  const onRecoverEmailChange = async (value) => {
    if (emailDoNotExist === "error") {
      if (value.target.value === "") {
        setEmailDoNotExist(null);
      } else {
        const emailExist = await postEmailExist(value.target.value);
        if (emailExist === true) {
          setEmailDoNotExist(null);
        }
      }
    }
  };

  return (
    <div className="loginFormContainer">
      <div className="background" onClick={() => closable && props.setShowLoginForm(false)}></div>
      {showBackgroundImg && <div className="backgroundImg" onClick={() => closable && props.setShowLoginForm(false)}></div>}
      {closable && <div className="closeButton" onClick={() => props.setShowLoginForm(false)}>
        <CloseOutlined />
      </div>}
      {showRecoverPwdForm ? (
        <Form name="recover" className="loginForm" onFinish={recover}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: t("login.pleaseInputEmail") }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
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
              {isloading ? (
                <Spin
                  indicator={<LoadingOutlined spin />}
                  style={{ color: "white" }}
                />
              ) : emailDoNotExist === "error" ? (
                t("login.emailDoesNotExist")
              ) : (
                t("login.sendResetPasswordEmail")
              )}
            </Button>
          </Form.Item>
          <a
            className="login-form-forgot"
            onClick={() => setShowRecoverPwdForm(false)}
          >
            <ArrowLeftOutlined /> <span>{t("login.remember")}</span>
          </a>
        </Form>
      ) : (
        <Form name="normal_login" className="loginForm" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: t("login.pleaseInputEmailOrUsername"),
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={t("login.emailOrUsername")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: t("login.pleaseInputPassword") },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              placeholder={capitalizeFirstLetter(t("login.password"))}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isloading ? (
                <Spin
                  indicator={<LoadingOutlined spin />}
                  style={{ color: "white" }}
                />
              ) : (
                t("login.login")
              )}
            </Button>
          </Form.Item>
          <a
            className="login-form-forgot"
            onClick={() => setShowRecoverPwdForm(true)}
          >
            {t("login.forgotPassword")}
          </a>
        </Form>
      )}
    </div>
  );
};
