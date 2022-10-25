import React from "react";
import Button from "../UI/Button";
import classes from "./Table.module.css";
import TableItem from "./TableItem";

let dummy_data = [
  { id: "1", year: 2015, effectiveRent: 20, startingRent: 15 },
  { id: "2", year: 2016, effectiveRent: 21, startingRent: 22 },
  { id: "3", year: 2017, effectiveRent: 29, startingRent: 34 },
  { id: "4", year: 2018, effectiveRent: 23, startingRent: 27 },
  { id: "5", year: 2019, effectiveRent: 28, startingRent: 25 },
  { id: "6", year: 2020, effectiveRent: 33, startingRent: 29 },
  { id: "7", year: 2021, effectiveRent: 35, startingRent: 33 },
  { id: "8", year: 2022, effectiveRent: 38, startingRent: 36 },
];

export default function Table() {
  return (
    <div className={classes.table}>
      <h1>Statistic</h1>
      <section className={classes.tableHead}>
        <div className={classes.tableHeader}>Year</div>
        <div className={classes.tableHeader}>Starting rent</div>
        <div className={classes.tableHeader}>Effective rent</div>
        <div className={classes.tableHeader}>Action</div>
      </section>
      <section className={classes.tableContent}>
        {dummy_data.map((item) => {
          return (
            <TableItem
              year={item.year}
              sr={item.startingRent}
              er={item.effectiveRent}
            />
          );
        })}
      </section>
      <Button title="add" click={() => console.log("add")} classBtn="addBtn" />
    </div>
  );
}
