import React, { ChangeEvent, useEffect } from "react";
import classes from "./CreateStatisticForm.module.css";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { closeModal } from "../../store/actions/modalActions";
import { useState } from "react";
import {
  sendDataAction,
  updateDataAction,
} from "../../store/actions/dataItemsActions";

export default function CreateStatisticForm() {
  const dispatch = useAppDispatch();
  const { isCreate } = useAppSelector((state) => state.modalReducer);
  const { updatedItem } = useAppSelector((state) => state.dataFetchReducer);

  const [userYear, setUserYear] = useState<any>("");
  const [userSr, setUserSr] = useState<any>("");
  const [userEr, setUserEr] = useState<any>("");

  const btnText = isCreate ? "Add" : "Update";

  useEffect(() => {
    if (!isCreate) {
      setUserYear(updatedItem?.year);
      setUserSr(updatedItem?.startingRent);
      setUserEr(updatedItem?.effectiveRent);
    }
  }, [isCreate]);

  const yearHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserYear(event.target.value);
  };
  const srHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserSr(event.target.value);
  };

  const erHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEr(event.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(closeModal());

    let userdata = {
      year: parseInt(userYear),
      startingRent: parseInt(userSr),
      effectiveRent: parseInt(userEr),
    };

    if (isCreate) {
      dispatch(sendDataAction(userdata));
    } else {
      dispatch(updateDataAction(userdata, updatedItem?.id || ""));
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.inputs}>
        <div className={classes.inputItem}>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            placeholder="Enter year"
            onChange={yearHandler}
            required
            value={userYear}
          />
        </div>
        <div className={classes.inputItem}>
          <label htmlFor="sr">Starting rate</label>
          <input
            type="number"
            id="sr"
            placeholder="Enter starting rate"
            onChange={srHandler}
            required
            value={userSr}
          />
        </div>
        <div className={classes.inputItem}>
          <label htmlFor="er">Effective rate</label>
          <input
            type="number"
            id="er"
            placeholder="Enter effective rate"
            onChange={erHandler}
            required
            value={userEr}
          />
        </div>
      </div>

      <Button title={btnText} classBtn="addBtn" type="submit" />
    </form>
  );
}
