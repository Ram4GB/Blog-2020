import { createAction } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

export const login = createAction(`${MODULE_NAME}_SAGA_LOGIN`);
export const logout = createAction(`${MODULE_NAME}_SAGA_LOGOUT`);
export const loginWithGoogle = createAction(`${MODULE_NAME}_SAGA_LOGIN_WITH_GOOGLE`);
export const loginWithFacebook = createAction(`${MODULE_NAME}_SAGA_LOGIN_WITH_FACEBOOK`);
export const loginWithGithub = createAction(`${MODULE_NAME}_SAGA_LOGIN_WITH_GITHUB`);
export const redirect = createAction(`${MODULE_NAME}_SAGA_REDIRECT`);

export default null;
