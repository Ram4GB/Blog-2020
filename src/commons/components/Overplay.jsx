import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actionUI from "../../modules/ui/reducers";

export default function Overplay({ openSidebar }) {
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(actionUI.CLOSE_SIDEBAR());
  };

  return <div onClick={closeSidebar} className={`overplay ${openSidebar ? "active" : ""}`} />;
}

Overplay.propTypes = {
  openSidebar: PropTypes.bool.isRequired
};
