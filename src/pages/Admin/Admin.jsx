import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { postGuestlistsForParty } from "./postGuestlistsForParty";
import { getHasAccess } from "./getHasAccess";

import './Admin.less';

export const Admin = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [guestlist, setGuestlist] = useState(null);

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
    setIsLoading(false);
  }

  const fetchHasAccess = async () => {
    const resultAccess = await getHasAccess();
    console.log('resultAccess', resultAccess);
    setHasAccess(resultAccess);
    if (resultAccess === true) {
      fetchGuestlist();
    } else {
      setShowLoginForm(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchHasAccess();
  }, [])

  useEffect(() => {
    if (hasAccess === true) {
      fetchGuestlist();
    }
  }, [hasAccess])

  return (
    <div className="adminContainer">
      {showLoginForm && <LoginForm setHasAccess={setHasAccess} setShowLoginForm={setShowLoginForm} closable={false} />}
      {hasAccess === true && (isLoading ?
        <Spin
          indicator={<LoadingOutlined spin />}
          style={{ color: "white" }}
        /> :
        <>
          <div className="title">Charity Rave
            <div className="subTitle">
              {guestlist && (guestlist.length + " ")}
              {t("admin.ticketReservation")}
            </div>
          </div>
          {guestlist}
        </>
      )}
    </div>
  );
};
