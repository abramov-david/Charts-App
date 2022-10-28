import React from "react";
import classes from "./Table.module.css";
import TableItem from "./TableItem";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { openModal, showCreate } from "../../store/actions/modalActions";

export default function Table() {
  const { error, loading, items, sending, updating } = useAppSelector(
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
        <h2>Charts data</h2>
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
          <div className={`${classes.status} ${classes.status__sending}`}>
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
        {updating && (
          <div className={`${classes.status} ${classes.status__updating}`}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <rect x="19" y="19" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="40" y="19" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.125s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="61" y="19" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.25s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="19" y="40" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.875s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="61" y="40" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.375s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="19" y="61" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.75s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="40" y="61" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.625s"
                  calcMode="discrete"
                ></animate>
              </rect>
              <rect x="61" y="61" width="20" height="20" fill="#1d3f72">
                <animate
                  attributeName="fill"
                  values="#5699d2;#1d3f72;#1d3f72"
                  keyTimes="0;0.125;1"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.5s"
                  calcMode="discrete"
                ></animate>
              </rect>
            </svg>
            <p>Updating...</p>
          </div>
        )}
      </div>
    </>
  );
}
