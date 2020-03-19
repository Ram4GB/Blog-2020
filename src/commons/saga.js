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
  loginWithGithubFirebase
} from "./utils/firebase";
import * as actionsUser from "../modules/users/reducers";

function* loadBlog() {
  try {
    const result = yield call(getDataCollects, "blogs");
    if (result) yield put(actionsBlog.REDUCER_LOAD_BLOG_SUCCESS(result));
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
    yield put(actionsUser.LOGIN_FAIL(error));
  }
}

function* logout() {
  const result = yield call(logoutFirebase);
  if (result) yield put(actionsUser.LOG_OUT_SUCCESS());
  else yield put(actionsUser.LOG_OUT_FAIL());
}

function* loginWithGoogle() {
  try {
    const result = yield call(loginWithGoogleFirebase);
    yield put(actionsUser.LOGIN_SUCCESS(result));
  } catch (error) {
    yield put(actionsUser.LOGIN_FAIL(error));
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

export default function* rootSaga() {
  yield takeEvery(actionsSagaBlog.loadBlog, loadBlog);
  yield takeEvery(actionsSagaUser.login, login);
  yield takeEvery(actionsSagaUser.logout, logout);
  yield takeEvery(actionsSagaUser.loginWithGoogle, loginWithGoogle);
  yield takeEvery(actionsSagaUser.loginWithGithub, loginWithGithub);
  yield takeEvery(actionsSagaUser.loginWithFacebook, loginWithFacebook);
}
