/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Row, Col, Progress, Tooltip, Button } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  YahooOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  UnorderedListOutlined,
  GithubOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router";

export default function AboutMePage() {
  const history = useHistory();

  return (
    <div className="container-90 about-me">
      <Button onClick={() => history.goBack()} className="btn-back">
        Quay lại
      </Button>
      <Row gutter={6}>
        <Col lg={6}>
          <img
            className="img-author"
            src="https://live.staticflickr.com/8076/8323936425_137d023a0f.jpg"
            alt=""
          />
          <div className="group-information">
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">Tên</div>
              </Col>
              <Col lg={12}>
                <div className="infor">Lê Minh Cường</div>
              </Col>
            </Row>
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">Tuổi</div>
              </Col>
              <Col lg={12}>
                <div className="infor">{new Date().getFullYear() - 1999}</div>
              </Col>
            </Row>
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">Vị trí</div>
              </Col>
              <Col lg={12}>
                <div className="infor">Hồ Chí Minh</div>
              </Col>
            </Row>
            <Row className="row-info">
              <Col lg={12}>
                <div className="title">Đại học</div>
              </Col>
              <Col lg={12}>
                <div className="infor">Đại học Sài Gòn</div>
              </Col>
            </Row>
          </div>
          <h3>SOCIAL PROFILES</h3>
          <div className="group-social">
            <FacebookOutlined
              onClick={() => window.open("https://www.facebook.com/le.minhcuong.9638")}
            />
            <GithubOutlined onClick={() => window.open("https://github.com/Ram4GB")} />
            <Tooltip placement="top" title="minhcuongdeptrai1@gmail.com">
              <GoogleOutlined />
            </Tooltip>
            <Tooltip placement="top" title="leminhcuong2988@yahoo.com.vn">
              <YahooOutlined />
            </Tooltip>
          </div>
        </Col>
        <Col className="myself" lg={18}>
          <h3>Mình là dân IT</h3>
          <p>
            Chào các bạn mình tên là Cường. Mình là dân IT. Mình đam mê ngôn ngữ lập trình và rất
            yêu thích các framework của JS như: ReactJs, VueJs và Angular. Sở thích của mình thường
            là đọc sách và viết code khi rảnh rỗi.
          </p>
          <p>
            Mục đích mình tạo ra web app này là để lưu lại những kinh nghiệm cũng như những bài học
            mà mình học tập được. Thật sự mình rất vui khi các bạn tìm đến đây. Nếu bạn thấy hay thì
            hãy liên lạc với mình link facebook bên cạnh.
          </p>
          <p>
            Web app này mình viết bằng ReactJS + Firebase (sử dụng Authencicate để login). Cơ bản là
            để mình vào viết blog. Nếu bạn có ý kiến gì hay những tính năng mới cho web thì hãy
            inbox cho mình. Rất vui được cảm bạn. Cảm ơn <span>❤️❤️❤️ 🥂🥂🥂🥂🥂</span>
          </p>
          <h3>Webiste có thể code</h3>
          <Row>
            <Col className="banner" lg={8}>
              <SmileOutlined />
              <h4>Responsive</h4>
            </Col>
            <Col className="banner" lg={8}>
              <CheckCircleOutlined />
              <h4>Thẩm mĩ</h4>
            </Col>
            <Col className="banner" lg={8}>
              <UnorderedListOutlined />
              <h4>Layout đẹp</h4>
            </Col>
          </Row>

          <div className="skill">
            <h3>Skills</h3>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                ReactJS
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={80}>
                  ReactJS
                </Progress>
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                Nodejs
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={70}>
                  ReactJS
                </Progress>
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                HTML
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={60}>
                  ReactJS
                </Progress>
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                CSS
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={55}>
                  ReactJS
                </Progress>
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-name" lg={4} sm={24} xs={24}>
                Java
              </Col>
              <Col lg={20}>
                <Progress status="active" showInfo className="skill-percent" percent={50}>
                  ReactJS
                </Progress>
              </Col>
            </Row>
          </div>
          <div className="project">
            <h3>Dự án</h3>
            <ul>
              <li className="project-item">
                <h4>Ram4GB / congnghephanmem-frontend</h4>
                <p>Website bán vé máy bay</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Ngôn ngữ :</span> ReactJS
                </p>
              </li>
              <li className="project-item">
                <h4>GoogleDriveAPI-Gallery</h4>
                <p>API để upload file lên gg driver</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Ngôn ngữ :</span> Nodejs
                </p>
                <p>
                  <a href="https://gallery-ram4gb.herokuapp.com/lists-in-google-drive">Demo</a>
                </p>
              </li>
              <li className="project-item">
                <h4>SearchRankK17SGUCNTT</h4>
                <p>Website tra cứu điểm khoa CNTT. Crawl và xử lý bằng Nodejs</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Ngôn ngữ :</span> Nodejs + Template: EJS
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
