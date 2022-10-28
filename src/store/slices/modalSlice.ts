import { createSlice } from "@reduxjs/toolkit";
import { Imodal } from "../../models/models";

const initialState: Imodal = {
  isModal: false,
  isCreate: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isModal = true;
    },
    closeModal(state) {
      state.isModal = false;
    },
    showCreate(state) {
      state.isCreate = true;
    },
    hideCreate(state) {
      state.isCreate = false;
    },
  },
});

export default modalSlice.reducer;
