import React from "react";
import Button from "../UI/Button";

export default function Table() {
  return (
    <div>
      <h1>Table</h1>
      <Button
        title="create"
        click={() => console.log("create")}
        classBtn="greenBtn"
      />
      <Button
        title="delete"
        click={() => console.log("delete")}
        classBtn="redBtn"
      />
      <Button
        title="update"
        click={() => console.log("delete")}
        classBtn="updateBtn"
      />
    </div>
  );
}
