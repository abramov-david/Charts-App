import React from "react";
import classes from "./TableItem.module.css";
import Button from "../UI/Button";

interface TableItemProps {
  year: number;
  er: number;
  sr: number;
}

export default function TableItem({ year, sr, er }: TableItemProps) {
  return (
    <div className={classes.tableItem}>
      <div>{year}</div>
      <div>{sr}</div>
      <div>{er}</div>
      <div className={classes.btns}>
        <Button
          title="update"
          click={() => console.log("add")}
          classBtn="updateBtn"
        />
        <Button
          title="delete"
          click={() => console.log("add")}
          classBtn="deleteBtn"
        />
      </div>
    </div>
  );
}
