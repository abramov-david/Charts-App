import { AppDispatch } from "../index";
import axios from "../../axios";
import { Idata, sendData } from "../../models/models";
import { dataSlice } from "../slices/dataSlice";

export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(dataSlice.actions.fetching());
      const response = await axios.get<Idata[]>("/cstest/davidAbramov");
      dispatch(dataSlice.actions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(dataSlice.actions.fetchError(error as Error));
    }
  };
};

export const sendDataAction = (data: Idata) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(dataSlice.actions.sending());
      const response = await axios.post<sendData>("/cstest/davidAbramov", data);
      const newData = { ...data, id: response.data.id };
      dispatch(dataSlice.actions.sendData(newData));
      dispatch(dataSlice.actions.sendSuccess());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteDataAction = (data: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(dataSlice.actions.deleteData(data));
      await axios.delete<string>(`/cstest/davidAbramov/${data}`);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getUpdateItem = (data: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(dataSlice.actions.getUpdateItem(data));
  };
};

export const updateDataAction = (data: Idata, id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(dataSlice.actions.updating());
      const response = await axios.put<Idata>(
        `/cstest/davidAbramov/${id}`,
        data
      );
      dispatch(dataSlice.actions.updateData(response.data));
      dispatch(dataSlice.actions.updatingSuccess());
    } catch (error) {
      console.log("error", error);
    }
  };
};
