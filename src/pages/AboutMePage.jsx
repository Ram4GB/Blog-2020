/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Row, Col, Progress, Tooltip, Button } from "antd";
import {
  FacebookOutlined,
  YahooOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  UnorderedListOutlined,
  GithubOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import CardPhoto from "../modules/blogs/components/CardPhoto";

export default function AboutMePage() {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <div className="container-90 about-me">
      <Button onClick={() => history.goBack()} className="btn-back">
        {t("back")}
      </Button>
      <Row gutter={6}>
        <Col lg={6}>
          <img className="img-author" src="/avatar.jpg" alt="" />
          <div className="group-information">
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">{t("name")}</div>
              </Col>
              <Col lg={12}>
                <div className="infor">{t("leminhcuong")}</div>
              </Col>
            </Row>
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">{t("age")}</div>
              </Col>
              <Col lg={12}>
                <div className="infor">{new Date().getFullYear() - 1999}</div>
              </Col>
            </Row>
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">{t("location")}</div>
              </Col>
              <Col lg={12}>
                <div className="infor">{t("hochiminh")}</div>
              </Col>
            </Row>
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">{t("university")}</div>
              </Col>
              <Col lg={12}>
                <div className="infor">{t("saigonuniversity")}</div>
              </Col>
            </Row>
          </div>
          <h3>{t("socialmedia")}</h3>
          <div className="group-social">
            <Button
              onClick={() => window.open("https://www.facebook.com/le.minhcuong.9638")}
              style={{ width: "100%" }}
            >
              <FacebookOutlined />
            </Button>
            <Button
              onClick={() => window.open("https://github.com/Ram4GB")}
              style={{ width: "100%" }}
            >
              <GithubOutlined />
            </Button>
            <Tooltip placement="top" title="leminhcuong2988@yahoo.com.vn">
              <Button style={{ width: "100%" }}>
                <YahooOutlined />
              </Button>
            </Tooltip>
          </div>
          <h3>{t("myPhoto")}</h3>
          <div className="group-photo">
            <Row gutter={6}>
              <CardPhoto src="/avatar.jpg" />
              <CardPhoto src="/avatar.jpg" />
              <CardPhoto src="/avatar.jpg" />
              <CardPhoto src="/avatar.jpg" />
            </Row>
          </div>
        </Col>
        <Col className="myself" lg={18}>
          <h3>{t("iAmAProgramer")}</h3>
          <p>{t("hiIntroduce")}</p>
          <p>{t("purpose")}</p>
          <p>
            {t("thank")} <span>❤️❤️❤️ 🥂🥂🥂🥂🥂</span>
          </p>
          <h3>{t("websiteICanCode")}</h3>
          <Row>
            <Col className="banner" lg={8}>
              <SmileOutlined />
              <h4>{t("responsive")}</h4>
            </Col>
            <Col className="banner" lg={8}>
              <CheckCircleOutlined />
              <h4>{t("aesthetic")}</h4>
            </Col>
            <Col className="banner" lg={8}>
              <UnorderedListOutlined />
              <h4>{t("niceLayout")}</h4>
            </Col>
          </Row>

          <div className="skill">
            <h3>{t("skill")}</h3>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                ReactJS
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={80} />
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                Nodejs
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={70} />
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                HTML
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={60} />
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                CSS
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={55} />
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                Java
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={50} />
              </Col>
            </Row>
          </div>
          <div className="project">
            <h3>{t("project")}</h3>
            <ul>
              <li className="project-item">
                <h4>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Ram4GB/congnghephanmem-frontend"
                  >
                    Ram4GB / congnghephanmem-frontend
                  </a>
                </h4>
                <p>{t("websiteBuyAirPlaneTicket")}</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>{t("language")} :</span> ReactJS
                </p>
              </li>
              <li className="project-item">
                <h4>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/Ram4GB/GoogleDriveAPI-Gallery"
                  >
                    {t("googleDriveUpLoadImage")}
                  </a>
                </h4>
                <p>{t("serverToUploadImage")}</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>{t("language")} :</span> Nodejs
                </p>
                <p>
                  <a href="https://ram4gb.github.io/Google-drive">Demo web</a> ||{" "}
                  <a href="https://gallery-ram4gb.herokuapp.com/lists-in-google-drive">Demo api</a>
                </p>
              </li>
              <li className="project-item">
                <h4>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/Ram4GB/SearchRankK17SGUCNTT"
                  >
                    {t("searchRankK17")}
                  </a>
                </h4>
                <p>{t("purposeSearchRankK17")}</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>{t("language")} :</span> Nodejs + Template:
                  EJS
                </p>
                <p>
                  <a href="https://search-point.herokuapp.com/">Demo</a>
                </p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
