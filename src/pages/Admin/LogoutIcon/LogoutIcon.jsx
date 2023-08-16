import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { LockOutlined, UnlockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Link } from "react-router-dom";

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

    return (props.hasAccess ?
        <div
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
        </div>
        :
        <div className='logoutIconContainer'>
            <Tooltip
                title={t("admin.goBack")}
                placement='left'
                color='magenta'
            >
                <Link to="/">
                    <ArrowLeftOutlined style={{ color: 'white' }} />
                </Link>
            </Tooltip>
        </div>);
} 