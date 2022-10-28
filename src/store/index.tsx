import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataFetchReducer from "./slices/dataSlice";
import modalReducer from "./slices/modalSlice";

const rootReducer = combineReducers({
  dataFetchReducer,
  modalReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
