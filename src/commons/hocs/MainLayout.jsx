import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown, notification, BackTop } from "antd";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router";
import MediaQuery from "react-responsive";
import { MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../components/SideBar";
import logo from "../../logo.svg";
import { MODULE_NAME as MODULE_UI } from "../../modules/ui/models";
import { MODULE_NAME as MODULE_USER } from "../../modules/users/models";
import * as actionSagaUser from "../../modules/users/actions";
import * as actionUI from "../../modules/ui/reducers";
import Overplay from "../components/Overplay";

const breakpoint = 760;
const { Header, Content } = Layout;

function MainLayout({ children, admin }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [defaultKeyMenu, setDefaultKeyMenu] = useState("/");
  const error = useSelector(state => state[MODULE_UI].error);
  const currentURL = useSelector(state => state[MODULE_UI].currentURL);
  const success = useSelector(state => state[MODULE_UI].success);
  const openSidebar = useSelector(state => state[MODULE_UI].openSideBar);
  const isLogin = useSelector(state => state[MODULE_USER].isLogin);
  const theme = useSelector(state => state[MODULE_UI].theme);

  const handleSelectMenu = link => {
    dispatch(actionSagaUser.redirect(link.key));
  };

  useEffect(() => {
    if (error)
      notification.error({
        message: error
      });
  }, [error]);

  useEffect(() => {
    if (success)
      notification.success({
        message: success
      });
  }, [success]);

  useEffect(() => {
    if (currentURL) history.push(`${currentURL}`);
  }, [currentURL, history]);

  const handleLogout = () => {
    dispatch(actionSagaUser.logout());
  };

  return (
    <Layout className={`layout ${theme}`}>
      <Header
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <MediaQuery minWidth={breakpoint}>
          <Menu
            mode="horizontal"
            selectedKeys={[defaultKeyMenu]}
            style={{ lineHeight: "64px", fontWeight: "700", width: "100%" }}
            onSelect={handleSelectMenu}
          >
            <Menu.Item disabled style={{ cursor: "pointer" }}>
              <img src={logo} alt="" style={{ width: 50, height: 50 }} />
            </Menu.Item>
            <Menu.Item key="/">Trang chủ</Menu.Item>
            {/* <Menu.Item key="/about">Về tôi</Menu.Item> */}
            {/* <Menu.Item key="/news">Tin tức</Menu.Item> */}
            {admin ? <Menu.Item key="/write_blog">Viết blog</Menu.Item> : null}
            {isLogin === false ? (
              <Menu.Item className="login" key="/login">
                Đăng nhập
              </Menu.Item>
            ) : (
              <Menu.Item className="login" style={{ float: "right" }} onClick={handleLogout}>
                Đăng xuất
              </Menu.Item>
            )}
            {/* <Menu.Item style={{ float: "right" }}>
              <UserOutlined />
            </Menu.Item> */}
            <Menu.Item disabled className="language">
              <Dropdown
                overlay={() => {
                  return (
                    <Menu>
                      <Menu.Item>
                        <img
                          src="https://codelearnstorage.s3.amazonaws.com/Themes/TheCodeCampPro/Resources-cdn/Images/vn.png"
                          alt=""
                          style={{ width: 20, height: 20, marginRight: 5 }}
                        />
                        VietNam
                      </Menu.Item>
                      <Menu.Item>
                        {" "}
                        <img
                          src="https://codelearnstorage.s3.amazonaws.com/Themes/TheCodeCampPro/Resources-cdn/Images/en.png"
                          alt=""
                          style={{ width: 20, height: 20, marginRight: 5 }}
                        />
                        English
                      </Menu.Item>
                    </Menu>
                  );
                }}
              >
                <img
                  src="https://codelearnstorage.s3.amazonaws.com/Themes/TheCodeCampPro/Resources-cdn/Images/vn.png"
                  alt=""
                  style={{ width: 30, height: 30 }}
                />
              </Dropdown>
            </Menu.Item>
          </Menu>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoint}>
          <SideBar admin openSidebar={openSidebar} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKeyMenu]}
            style={{ lineHeight: "64px", fontWeight: "700", width: "100%" }}
          >
            <Menu.Item
              className="button-toggle"
              onClick={
                () =>
                  openSidebar === true
                    ? dispatch(actionUI.CLOSE_SIDEBAR())
                    : dispatch(actionUI.OPEN_SIDEBAR())
                // eslint-disable-next-line react/jsx-curly-newline
              }
              style={{ float: "right" }}
            >
              <MenuOutlined />
            </Menu.Item>
          </Menu>
        </MediaQuery>
      </Header>
      <Content style={{ backgroundColor: "#fff" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Overplay openSidebar={openSidebar} />
      <div
        onClick={() =>
          theme === "light"
            ? dispatch(actionUI.CHANGE_THEME("dark"))
            : dispatch(actionUI.CHANGE_THEME("light"))
        }
        className="affix"
      >
        <SettingOutlined />
      </div>
      <BackTop />
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  admin: PropTypes.bool
};

MainLayout.defaultProps = {
  children: null,
  admin: false
};

export default MainLayout;
