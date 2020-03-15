import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import MainPage from "./MainPage";

function Root({ store }) {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

Root.defaultPropTypes = {
  store: {}
};

export default Root;
