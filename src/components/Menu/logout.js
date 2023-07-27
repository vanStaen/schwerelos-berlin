import React from "react";
import axios from "axios";
import { notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import { userStore } from "../../store/userStore";

export const logout = async () => {
    const apiUrl = process.env.API_URL + "/auth/logout";
    const response = await axios(
        {
            url: apiUrl,
            method: "DELETE",
        },
    );
    if ((response.status !== 200) & (response.status !== 201)) {
        if (response.status === 401) {
            throw new Error(`Error! Unauthorized(401)`);
        } else {
            throw new Error(`Error! Status ${response.status}`);
        }
    }
    userStore.setIsAdmin(false);
    if (response.data.success) {
        notification.open({
            message: 'Logout was sucessfull!',
            placement: "topRight",
            className: "blackNotification",
            duration: 3,
            icon: <CheckCircleOutlined style={{ color: "green" }} />,
        });
    }

};