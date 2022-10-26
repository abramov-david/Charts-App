import React from "react";
import { useRef } from "react";
import classes from "./CreateStatisticForm.module.css";
import Button from "./UI/Button";

export default function CreateStatisticForm() {
  const userYear = useRef<HTMLInputElement>(null);
  const userSr = useRef<HTMLInputElement>(null);
  const userEr = useRef<HTMLInputElement>(null);

  const changeHandler = () => {
    console.log(userYear.current?.value);
  };
  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <div className={classes.inputItem}>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            placeholder="Enter year"
            onChange={changeHandler}
            ref={userYear}
          />
        </div>
        <div className={classes.inputItem}>
          <label htmlFor="sr">Starting rate</label>
          <input
            type="number"
            id="sr"
            placeholder="Enter starting rate"
            onChange={changeHandler}
            ref={userSr}
          />
        </div>
        <div className={classes.inputItem}>
          <label htmlFor="er">Effective rate</label>
          <input
            type="number"
            id="er"
            placeholder="Enter effective rate"
            onChange={changeHandler}
            ref={userEr}
          />
        </div>
      </div>

      <Button title="Add" click={() => console.log("add")} classBtn="addBtn" />
    </form>
  );
}
