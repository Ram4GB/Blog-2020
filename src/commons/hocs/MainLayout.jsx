import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router";
import MediaQuery from "react-responsive";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../components/SideBar";
import logo from "../../logo.svg";
import { MODULE_NAME } from "../../modules/users/models";
import * as actionSagaUser from "../../modules/users/actions";

const breakpoint = 760;
const { Header, Content } = Layout;

function MainLayout({ children }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [defaultKeyMenu, setDefaultKeyMenu] = useState("/");
  const isLogin = useSelector(state => state[MODULE_NAME].isLogin);

  const handleSelectMenu = link => {
    history.push(link.key);
  };

  useEffect(() => {
    setDefaultKeyMenu(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(actionSagaUser.logout());
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="logo">
          <img src={logo} alt="" style={{ marginRight: 20, width: 50, height: 50 }} />
        </div>
        <MediaQuery minWidth={breakpoint}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKeyMenu]}
            style={{ lineHeight: "64px", fontWeight: "700", width: "100%" }}
            onSelect={handleSelectMenu}
          >
            <Menu.Item key="/">Trang chủ</Menu.Item>
            {/* <Menu.Item key="/about">Về tôi</Menu.Item> */}
            {/* <Menu.Item key="/news">Tin tức</Menu.Item> */}
            <Menu.Item key="/write_blog">Viết blog</Menu.Item>
            {isLogin === false ? (
              <Menu.Item style={{ float: "right" }} key="/login">
                Đăng nhập
              </Menu.Item>
            ) : (
              <Menu.Item style={{ float: "right" }} onClick={handleLogout}>
                Đăng xuất
              </Menu.Item>
            )}
            <Menu.Item style={{ float: "right" }}>
              <UserOutlined />
            </Menu.Item>
            <Menu.Item style={{ float: "right" }}>
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
          <SideBar openMenu={openMenu} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKeyMenu]}
            style={{ lineHeight: "64px", fontWeight: "700", width: "100%" }}
          >
            <Menu.Item
              onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
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
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

MainLayout.defaultProps = {
  children: null
};

export default MainLayout;
