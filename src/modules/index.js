import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./blogs/reducers";
import userReducer from "./users/reducers";
import { MODULE_NAME as MODULE_BLOGS } from "./blogs/models";
import { MODULE_NAME as MODULE_USER } from "./users/models";
import rootSaga from "../commons/saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: { [MODULE_BLOGS]: todoReducer.reducer, [MODULE_USER]: userReducer.reducer },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
