import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Spin, Typography, Tooltip } from "antd";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { postGuestlistsForParty } from "./postGuestlistsForParty";
import { getHasAccess } from "./getHasAccess";
import { LogoutIcon } from "./LogoutIcon/LogoutIcon";

const { Text } = Typography;

import "./Admin.less";

export const Admin = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [guestlist, setGuestlist] = useState(null);
  const [emails, setEmails] = useState(null);
  const [names, setNames] = useState(null);

  const fetchGuestlist = async () => {
    const guestlistResult = await postGuestlistsForParty();
    const guestlistFormated = guestlistResult.map((list) => {
      return (
        <div className="listContainer">
          <div className="col_left">
            <Text className="col_left_Text" ellipsis={false}>
              {list.name}
            </Text>
          </div>
          <div className="col_mid"></div>
          <div className="col_right">
            <Text
              copyable={{ tooltips: false }}
              ellipsis
              className="col_right_Text"
            >
              {list.email}
            </Text>
          </div>
        </div>
      );
    });
    setGuestlist(guestlistFormated);
    const emailsFormated = guestlistResult.map((list) => {
      return `"${list.email}", `;
    });
    const namesFormated = guestlistResult.map((list) => {
      return list.name + ", ";
    });
    setEmails(emailsFormated);
    setNames(namesFormated);
    setIsLoading(false);
  };

  const fetchHasAccess = async () => {
    const resultAccess = await getHasAccess();
    setHasAccess(resultAccess);
    if (resultAccess === true) {
      setShowLoginForm(false);
      fetchGuestlist();
    } else {
      setShowLoginForm(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHasAccess();
  }, []);

  useEffect(() => {
    if (hasAccess === true) {
      fetchGuestlist();
    } else if (hasAccess === false) {
      setShowLoginForm(true);
    }
  }, [hasAccess]);

  return (
    <div className="adminContainer">
      <LogoutIcon setHasAccess={setHasAccess} hasAccess={hasAccess} />
      {showLoginForm && (
        <LoginForm
          setHasAccess={setHasAccess}
          setShowLoginForm={setShowLoginForm}
          closable={false}
          showBackgroundImg={true}
        />
      )}
      {hasAccess === true &&
        (isLoading ? (
          <Spin
            indicator={<LoadingOutlined spin />}
            style={{ color: "white" }}
          />
        ) : (
          <>
            <div className="title">
              Charity Rave
              <div className="subTitle">
                {guestlist && guestlist.length + " "}
                {t("admin.ticketReservation")}
              </div>
            </div>
            {guestlist}
            <div className="adminListEmailName">
              <div> Emails: </div>
              {emails}
            </div>
            <div className="adminListEmailName">
              <div> Names: </div>
              {names}
            </div>
          </>
        ))}
    </div>
  );
};
