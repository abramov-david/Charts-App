import React from "react";
import classes from "./TableItem.module.css";
import Button from "../UI/Button";
import { useAppDispatch } from "../../hooks/redux";
import { hideCreate, openModal } from "../../store/actions/modalActions";
import {
  deleteDataAction,
  getUpdateItem,
} from "../../store/actions/dataItemsActions";

interface TableItemProps {
  id?: string;
  year: number;
  er: number;
  sr: number;
}

export default function TableItem({ year, sr, er, id }: TableItemProps) {
  const dispatch = useAppDispatch();

  const updateHandler = () => {
    dispatch(openModal());
    dispatch(hideCreate());
    dispatch(getUpdateItem(id || ""));
  };

  const deleteHandler = () => {
    dispatch(deleteDataAction(parseInt(id || "")));
  };
  return (
    <div className={classes.tableItem}>
      <div>{year}</div>
      <div>{sr}</div>
      <div>{er}</div>
      <div className={classes.btns}>
        <Button title="update" click={updateHandler} classBtn="updateBtn" />
        <Button title="delete" click={deleteHandler} classBtn="deleteBtn" />
      </div>
    </div>
  );
}
