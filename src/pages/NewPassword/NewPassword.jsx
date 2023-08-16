import React, { useEffect, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useParams } from "react-router-dom";
import { LockOutlined, SyncOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import { postTokenVerify } from "./postTokenVerify";
import { postChangePassword } from "./postChangePassword";

import "./NewPassword.less";

export const NewPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const params = useParams();
  const { t } = useTranslation();

  const token = params.key;

  const submitHandler = async (value) => {
    setIsLoading(true);
    const password = value.password;
    try {
      const success = await postChangePassword(token, password);
      if (success === true) {
        notification.success({
          message: t("loginRecover.passwordReseted"),
          placement: "topRight",
          className: "blackNotification",
        });
        setTimeout(() => {
          document.location.href = "/";
        }, 3000);
      } else {
        notification.warn({
          message: t("loginRecover.passwordNotChanged"),
          placement: "topRight",
          className: "blackNotification",
        });
      }
    } catch (error) {
      notification.warn({
        message: error.message,
        placement: "topLeft",
      });
      console.log(error);
    }
    setIsLoading(false);
  };

  const verifyToken = async () => {
    console.log("token", token);
    const tokenValid = await postTokenVerify(token);
    if (!tokenValid) {
      notification.error({
        message: t("loginRecover.linkNotValid"),
        placement: "topRight",
        className: "blackNotification",
        duration: 0,
      });
      setIsValid(false);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="newPassword__container">
      <div className="newPassword__background"></div>
      <Form
        name="form_signup"
        className="newPassword__form"
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
      >
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t("loginRecover.pleaseInputNewPassword"),
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder={t("loginRecover.pleaseInputNewPassword")}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: t("loginRecover.pleaseInputNewPassword"),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(t("loginRecover.passwordDoNotMatch"))
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder={t("loginRecover.pleaseConfirmNewPassword")}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="newPassword__formbutton"
            disabled={!isValid}
          >
            {isLoading ? (
              <SyncOutlined spin />
            ) : isValid ? (
              t("loginRecover.updatePassword")
            ) : (
              t("loginRecover.linkNotValidAnymore")
            )}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
