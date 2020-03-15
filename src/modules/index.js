import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./blogs/reducers";
import { MODULE_NAME as MODULE_BLOGS } from "./blogs/models";
import rootSaga from "../commons/saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: { [MODULE_BLOGS]: todoReducer.reducer },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
