import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Idata } from "../../models/models";

interface DataState {
  loading: boolean;
  sending?: boolean;
  error: string;
  items: Idata[];
  updatedItem?: Idata;
}

const initialState: DataState = {
  loading: false,
  sending: false,
  error: "",
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
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
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
    deleteData(state, action: PayloadAction<number>) {
      const newArr = state.items.filter(
        (item) => action.payload !== parseInt(item.id || "")
      );
      state.items = newArr;
    },

    //UPDATE ACTIONS
    getUpdateItem(state, action: PayloadAction<string>) {
      const updItem = state.items.filter((item) => action.payload === item.id);
      state.updatedItem = updItem[0];
    },
    updateData(state, action: PayloadAction<number>) {},
  },
});

export default dataSlice.reducer;
