import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../modules/blogs/reducers";
import * as actionsSaga from "../modules/blogs/actions";
// import { url, fetchLoading } from "./utils/fetch";
import { getDataCollects } from "./utils/firebase";

function* loadBlog() {
  try {
    const result = yield call(getDataCollects, "blogs");
    if (result) yield put(actions.REDUCER_LOAD_BLOG_SUCCESS(result));
  } catch (error) {
    yield put(actions.REDUCER_LOAD_BLOG_FAIL(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(actionsSaga.loadBlog, loadBlog);
}
