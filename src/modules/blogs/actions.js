import { createAction } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

export const loadBlog = createAction(`${MODULE_NAME}_SAGA_LOAD_BLOG`);

export default null;
