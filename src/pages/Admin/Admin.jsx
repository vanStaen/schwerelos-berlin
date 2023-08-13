import React, { useEffect, useState } from "react";
import { postGuestlistsForParty } from "./postGuestlistsForParty";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";

import { LoginForm } from '../../components/LoginForm/LoginForm';

import './Admin.less';

export const Admin = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [guestlist, setGuestlist] = useState(null);

  useEffect(() => {
    const fetchGuestlist = async () => {
      const guestlistResult = await postGuestlistsForParty();
      const guestlistFormated = guestlistResult.map(
        (list) => {
          return (
            <div className="listContainer">
              <div className="col_left">{list.name}</div>
              <div className="col_mid"></div>
              <div className="col_right">{list.email}</div>
            </div>
          )
        }
      )
      setGuestlist(guestlistFormated);
      console.log('guestlistResult', guestlistResult);
      setIsLoading(false);
    }

    const fetchHasAccess = async () => {
      const resultAccess = await postGuestlistsForParty();
      setHasAccess(resultAccess);
    }

    fetchHasAccess();
    fetchGuestlist();

  }, [])


  return (
    <div className="adminContainer">
      {hasAccess ? isLoading ?
        <Spin
          indicator={<LoadingOutlined spin />}
          style={{ color: "white" }}
        /> :
        <>
          <div className="title">Charity Rave
            <div className="subTitle">
              {t("admin.ticketReservation")}
            </div>
          </div>
          {guestlist}
        </> : <LoginForm />
      }
    </div>
  );
};
