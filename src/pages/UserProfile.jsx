/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Alert } from "antd";
import { MODULE_NAME as MODULE_USER } from "../modules/users/models";

export default function UserProfile() {
  const user = useSelector(state => state[MODULE_USER].user);
  let profile;
  if (user) [profile] = user.providerData;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return user ? (
    <div className="container profile">
      <div
        className="avata"
        style={{
          background: `url("${profile.photoURL ||
            'url("https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg")'}")`
        }}
      />
      <div className="information">
        <p>
          <label>Tài khoản:</label>
          {profile.displayName ? profile.displayName : ""}
        </p>
        <p>
          <label>Email:</label>
          {profile.email ? profile.email : ""}
        </p>
        <p>
          <label>Điện thoại:</label>
          {profile.phoneNumber ? profile.phoneNumber : ""}
        </p>
      </div>

      {!isMobile ? (
        <>
          <Alert
            type="info"
            showIcon
            message="Tính năng này đang cập nhật. Bạn nên sử dụng điện thoại để trải nghiệm tốt hơn !!"
          />
          <Alert
            type="info"
            showIcon
            message="This is updating. You should use smart phone to get best experience !!"
          />
        </>
      ) : null}
    </div>
  ) : null;
}
