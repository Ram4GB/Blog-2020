/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { Col, Modal } from "antd";
import PropTypes from "prop-types";

export default function CardPhoto({ src }) {
  const [isOpen, setIOpen] = useState(false);

  const handleClickImage = () => {
    setIOpen(true);
  };

  return (
    <>
      <Col onClick={handleClickImage} lg={6} md={12} sm={8} xs={8}>
        <div className="group-photo__item">
          <img className="group-photo__item-image" src={src} alt="" />
        </div>
      </Col>
      <Modal footer={null} onCancel={() => setIOpen(false)} visible={isOpen}>
        <img className="group-photo__item-image" src={src} alt="" />
      </Modal>
    </>
  );
}

CardPhoto.propTypes = {
  src: PropTypes.string.isRequired
};
