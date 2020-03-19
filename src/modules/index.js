import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./blogs/reducers";
import userReducer from "./users/reducers";
import uiReducer from "./ui/reducers";
import { MODULE_NAME as MODULE_BLOGS } from "./blogs/models";
import { MODULE_NAME as MODULE_USER } from "./users/models";
import { MODULE_NAME as MODULE_UI } from "./ui/models";
import rootSaga from "../commons/saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    [MODULE_BLOGS]: todoReducer.reducer,
    [MODULE_USER]: userReducer.reducer,
    [MODULE_UI]: uiReducer.reducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
