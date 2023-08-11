import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, notification, Spin } from "antd";
import { useTranslation } from "react-i18next";

import { postAddGuestlist } from "./postAddGuestlist";
import { postIsAlreadyOnTheList } from "./postIsAlreadyOnTheList";

import "./ListForm.less";

export const ListForm = (props) => {
  const [isloading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const onFinish = async (values) => {
    setIsLoading(true);
    const onThelist = await postIsAlreadyOnTheList(values.email);
    if (onThelist) {
      notification.error({
        message: t("charityRave.ticketAlreadyReserved"),
        placement: "topRight",
        className: "blackNotification",
        duration: 0,
        icon: <CloseCircleOutlined style={{ color: "red" }} />,
      });
      props.close(false);
      return;
    }
    try {
      const result = await postAddGuestlist(values.name, values.email);
      if (result) {
        notification.open({
          message: t("charityRave.ticketReservationSuccess"),
          placement: "topRight",
          className: "blackNotification",
          duration: 0,
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
    setIsLoading(false);
  };

  return (
    <div className="loginFormContainer">
      <div className="background" onClick={() => props.close(false)}></div>
      <div className="closeButton" onClick={() => props.close(false)}>
        <CloseOutlined />
      </div>
      <Form name="ticketReservation" className="loginForm" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: t("charityRave.pleaseInputEmail"),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t("charityRave.email")}
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            { required: true, message: t("charityRave.pleaseInputName") },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder={t("charityRave.name")}
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
              t("charityRave.reserveTicket")
            )}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
