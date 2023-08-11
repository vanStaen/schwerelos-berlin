import React, { useEffect, useState } from "react";
import { postGuestlistsForParty } from "./postGuestlistsForParty";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import './Admin.less';

export const Admin = () => {

  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    }
    fetchGuestlist()
  }, [])


  return (
    <div className="container">
      {isLoading ?
        <Spin
          indicator={<LoadingOutlined spin />}
          style={{ color: "white" }}
        /> :
        <div>
          <div className="title">Charity Rave</div>
          {guestlist}
        </div>
      }
    </div>
  );
};
