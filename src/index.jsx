import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./commons/assets/css/custom-ant.css";
import "./commons/assets/css/sidebar.css";
import "./commons/assets/css/blog-card.css";
import "./commons/assets/css/left-sidebar.css";
import "./commons/assets/css/blog-information.css";
import "./commons/assets/css/form-login.css";
import "./commons/assets/css/overplay.css";
import * as serviceWorker from "./serviceWorker";
import Root from "./commons/hocs/Root";
import store from "./modules/index";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
