import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Idata, DataState } from "../../models/models";

const initialState: DataState = {
  loading: false,
  sending: false,
  updating: false,
  error: "",
  isError: false,
  items: [],
  updatedItem: { id: "", year: 0, effectiveRent: 0, startingRent: 0 },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // FETCHING ACTIONS
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<Idata[]>) {
      state.loading = false;
      state.items = action.payload.sort((a, b) => a.year - b.year);
      state.isError = false;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.isError = true;
      state.error = action.payload.message;
    },

    // SENDING DATA ACTIONS
    sending(state) {
      state.sending = true;
    },
    sendData(state, action: PayloadAction<Idata>) {
      const sortedRes = [...state.items, action.payload].sort(
        (a, b) => a.year - b.year
      );
      state.items = sortedRes;
    },
    sendSuccess(state) {
      state.sending = false;
    },

    //DELETE ACTION
    deleteData(state, action: PayloadAction<string>) {
      const newArr = state.items.filter(
        (item) => action.payload !== item.id || ""
      );
      state.items = newArr;
    },

    //UPDATE ACTIONS
    updating(state) {
      state.updating = true;
    },
    updatingSuccess(state) {
      state.updating = false;
    },
    getUpdateItem(state, action: PayloadAction<string>) {
      const updItem = state.items.filter((item) => action.payload === item.id);
      state.updatedItem = updItem[0];
    },
    updateData(state, action: PayloadAction<Idata>) {
      state.updatedItem = action.payload;
      const newArr = state.items.filter(
        (item) => state.updatedItem?.id !== item.id
      );
      state.items = [...newArr, state.updatedItem].sort(
        (a, b) => a.year - b.year
      );
    },
  },
});

export default dataSlice.reducer;
