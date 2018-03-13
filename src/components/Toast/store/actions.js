import { createAction } from "redux-actions";
import * as types from "./actionTypes";

export const addToast = createAction(types.TOAST_ADD_MESSAGE);
export const removeToast = createAction(types.TOAST_REMOVE_MESSAGE);

// Custom Actions (shorthands)
export const addSuccess = message => ({
  type: types.TOAST_ADD_MESSAGE,
  payload: { type: "SUCCESS", message }
});

export const addError = message => ({
  type: types.TOAST_ADD_MESSAGE,
  payload: { type: "ERROR", message }
});

export const addWarning = message => ({
  type: types.TOAST_ADD_MESSAGE,
  payload: { type: "WARNING", message }
});
