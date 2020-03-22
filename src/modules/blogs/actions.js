import { createAction } from "@reduxjs/toolkit";
import { MODULE_NAME } from "./models";

export const loadBlog = createAction(`${MODULE_NAME}_SAGA_LOAD_BLOG`);
export const loadCategory = createAction(`${MODULE_NAME}_SAGA_LOAD_CATEGORY`);
export const nextPage = createAction(`${MODULE_NAME}_SAGA_NEXT_PAGE`);
export const previousPage = createAction(`${MODULE_NAME}_SAGA_PREVIOUS_PAGE`);

export default null;
