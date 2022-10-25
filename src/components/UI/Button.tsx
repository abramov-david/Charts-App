import React from "react";
import classes from "./Button.module.css";

interface btnProps {
  title: string;
  click: () => void;
  classBtn: string;
}

export default function Button({ title, click, classBtn }: btnProps) {
  return (
    <button className={`${classes.btn} ${classes[classBtn]}`} onClick={click}>
      {title}
    </button>
  );
}
