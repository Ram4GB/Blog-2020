import { takeEvery, call, put } from "redux-saga/effects";
import * as actionsBlog from "../modules/blogs/reducers";
import * as actionsSagaBlog from "../modules/blogs/actions";
import * as actionsSagaUser from "../modules/users/actions";
import {
  getDataCollects,
  signInWithEmailAndPassword,
  logoutFirebase,
  loginWithGoogleFirebase,
  loginWithFacebookFirebase,
  loginWithGithubFirebase,
  getAllCategory,
  getNextDataCollects
} from "./utils/firebase";
import * as actionsUser from "../modules/users/reducers";
import * as actionsUI from "../modules/ui/reducers";

function* loadBlog() {
  try {
    const result = yield call(getDataCollects, "blogs");
    if (result) yield put(actionsBlog.REDUCER_LOAD_BLOG_SUCCESS(result));
    else yield put(actionsUI.ERROR_FIREBASE({ message: "Cant not load data now" }));
  } catch (error) {
    yield put(actionsBlog.REDUCER_LOAD_BLOG_FAIL(error));
  }
}

function* login(action) {
  try {
    const result = yield call(
      signInWithEmailAndPassword,
      action.payload.email,
      action.payload.password
    );
    yield put(actionsUser.LOGIN_SUCCESS(result));
  } catch (error) {
    yield put(actionsUI.ERROR_FIREBASE(error));
    yield put(actionsUser.LOGIN_FAIL(error));
  }
}

function* logout() {
  try {
    yield call(logoutFirebase);
    yield put(actionsUI.SUCCESS_MESSAGE("Đăng xuất thành công"));
    yield put(actionsUser.LOG_OUT_SUCCESS());
  } catch (error) {
    yield put(actionsUI.ERROR_FIREBASE(error));
  }
}

function* loginWithGoogle() {
  try {
    const result = yield call(loginWithGoogleFirebase);
    yield put(actionsUser.LOGIN_SUCCESS(result));
    yield put(actionsUI.SUCCESS_MESSAGE("Chào mừng bạn tới với blog"));
  } catch (error) {
    yield put(actionsUI.ERROR_FIREBASE(error));
  }
}

function* loginWithFacebook() {
  try {
    const result = yield call(loginWithFacebookFirebase);
    yield put(actionsUser.LOGIN_SUCCESS(result));
  } catch (error) {
    yield put(actionsUser.LOGIN_FAIL(error));
  }
}

function* loginWithGithub() {
  try {
    const result = yield call(loginWithGithubFirebase);
    yield put(actionsUser.LOGIN_SUCCESS(result));
  } catch (error) {
    yield put(actionsUser.LOGIN_FAIL(error));
  }
}

export function* getAllCategorySaga(action) {
  const result = yield call(getAllCategory, action.payload);
  if (result) yield put(actionsBlog.GET_ALL_CATEGORY_SUCCESS(result));
  else yield put(actionsUI.ERROR_FIREBASE({ message: "No category founded" }));
}

export function* nextPage(action) {
  try {
    const { query } = action.payload;
    const result = yield call(getNextDataCollects, "blogs", query);
    if (result) {
      if (result.data && result.data.length !== 0)
        yield put(actionsBlog.REDUCER_LOAD_BLOG_SUCCESS(result));
      else yield put(actionsUI.INFOR_FIREBASE({ message: "Bạn đã xem hết rồi ^^" }));
    } else yield put(actionsUI.ERROR_FIREBASE({ message: "LOAD_BLOG_FAIL" }));
  } catch (error) {
    yield put(actionsUI.ERROR_FIREBASE(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(actionsSagaBlog.loadBlog, loadBlog);
  yield takeEvery(actionsSagaBlog.loadCategory, getAllCategorySaga);
  yield takeEvery(actionsSagaUser.login, login);
  yield takeEvery(actionsSagaUser.logout, logout);
  yield takeEvery(actionsSagaUser.loginWithGoogle, loginWithGoogle);
  yield takeEvery(actionsSagaUser.loginWithGithub, loginWithGithub);
  yield takeEvery(actionsSagaUser.loginWithFacebook, loginWithFacebook);
  yield takeEvery(actionsSagaBlog.nextPage, nextPage);
}
