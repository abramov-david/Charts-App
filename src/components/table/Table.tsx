import React from "react";
import classes from "./Table.module.css";
import TableItem from "./TableItem";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { openModal, showCreate } from "../../store/actions/modalActions";

export default function Table() {
  const { error, loading, items, sending } = useAppSelector(
    (state) => state.dataFetchReducer
  );
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(openModal());
    dispatch(showCreate());
  };

  return (
    <>
      <div className={classes.table}>
        <h1>Statistic</h1>
        <section className={classes.tableHead}>
          <div className={classes.tableHeader}>Year</div>
          <div className={classes.tableHeader}>Starting rent</div>
          <div className={classes.tableHeader}>Effective rent</div>
          <div className={classes.tableHeader}>Action</div>
        </section>
        <section className={classes.tableContent}>
          {items?.map((item) => {
            return (
              <TableItem
                year={item.year}
                sr={item.startingRent}
                er={item.effectiveRent}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </section>
        <Button title="create" click={addHandler} classBtn="createBtn" />
        {sending && (
          <div className={classes.sending}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <path
                fill="none"
                stroke="#d88c51"
                stroke-width="8"
                stroke-dasharray="42.76482137044271 42.76482137044271"
                d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
                stroke-linecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="0;256.58892822265625"
                ></animate>
              </path>
            </svg>
            <p>Creating...</p>
          </div>
        )}
      </div>
    </>
  );
}
