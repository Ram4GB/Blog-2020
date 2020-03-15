import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../modules/blogs/reducers";
import * as actionsSaga from "../modules/blogs/actions";
import { url, fetchLoading } from "./utils/fetch";

function* loadBlog() {
  try {
    const result = yield call(fetchLoading, { url, method: "GET", data: null });
    if (result && result.status === 200) yield put(actions.REDUCER_LOAD_BLOG_SUCCESS(result.data));
  } catch (error) {
    yield put(actions.REDUCER_LOAD_BLOG_FAIL(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(actionsSaga.loadBlog, loadBlog);
}
