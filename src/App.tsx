import React from "react";
import Charts from "./components/Charts";
import Table from "./components/table/Table";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Charts />
      <Table />
    </div>
  );
}

export default App;
