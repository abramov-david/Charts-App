import { AppDispatch } from "../index";
import { modalSlice } from "../slices/modalSlice";

export const openModal = () => {
  return (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.openModal());
  };
};

export const closeModal = () => {
  return (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.closeModal());
  };
};

export const showCreate = () => {
  return (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.showCreate());
  };
};

export const hideCreate = () => {
  return (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.hideCreate());
  };
};
