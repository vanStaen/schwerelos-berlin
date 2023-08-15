import React, { useState } from 'react';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useTranslation } from "react-i18next";

import { logout } from "../../../components/Menu/logout";

import './LogoutIcon.less';

export const LogoutIcon = (props) => {
    const { t } = useTranslation();
    const [icon, setIcon] = useState(<LockOutlined />);

    const onMouseEnter = () => {
        setIcon(<UnlockOutlined />)
    }
    const onMouseLeave = () => {
        setIcon(<LockOutlined />)
    }

    const handleLogoutClick = () => {
        logout(t("login.logoutSuccess"));
        props.setHasAccess(false);
    }

    return (<div
        className='logoutIconContainer'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleLogoutClick}
    >
        <Tooltip
            title={t("admin.logout")}
            placement='left'
            color='magenta'
        >
            {icon}
        </Tooltip>
    </div>);
} 