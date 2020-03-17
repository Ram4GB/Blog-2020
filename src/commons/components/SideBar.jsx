import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
  SettingOutlined,
  SnippetsOutlined,
  UserOutlined,
  MessageOutlined
} from "@ant-design/icons";
import PropTypes from "prop-types";
import logo from "../../logo.svg";

export default function SideBar({ openMenu }) {
  return (
    <nav className={`navbar ${openMenu ? "active" : ""}`}>
      <Menu defaultSelectedKeys={["/"]} theme="dark" className="navbar-nav">
        <Menu.Item className="nav-item">
          <img style={{ width: 50, height: 50, margin: "auto" }} src={logo} alt="" />
        </Menu.Item>
        <Menu.Item key="/" className="nav-item">
          <HomeOutlined />
          <span className="nav-text">Trang chủ</span>
        </Menu.Item>
        <Menu.Item key="/blog" className="nav-item">
          <SnippetsOutlined />
          <span className="nav-text">Blogs</span>
        </Menu.Item>
        <Menu.Item key="/news" className="nav-item">
          <NotificationOutlined />
          <span className="nav-text">News</span>
        </Menu.Item>
        <Menu.Item style={{ float: "right" }} className="nav-item">
          <UserOutlined />
          <span className="nav-text">Tài khoản</span>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <MessageOutlined />
          <span className="nav-text">Ngôn ngữ</span>
        </Menu.Item>
        <Menu.Item key="/setting" className="nav-item">
          <SettingOutlined />
          <span className="nav-text">Cài đặt</span>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

SideBar.propTypes = {
  openMenu: PropTypes.bool.isRequired
};

SideBar.defaultPropTypes = {
  openMenu: false
};
