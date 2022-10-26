import React from "react";
import Charts from "./components/Charts";
import Table from "./components/table/Table";
import classes from "./App.module.css";
import Modal from "./components/UI/Modal";
import CreateStatisticForm from "./components/CreateStatisticForm";

function App() {
  return (
    <>
      <Modal
        title="Create new statistic"
        onClose={() => {
          "Close it bitch";
        }}
      >
        <CreateStatisticForm />
      </Modal>
      <div className={classes.app}>
        <Charts />
        <Table />
      </div>
    </>
  );
}

export default App;
