import React, { useEffect } from "react";
import Charts from "./components/charts/Charts";
import Table from "./components/table/Table";
import classes from "./App.module.css";
import Modal from "./components/UI/Modal";
import CreateStatisticForm from "./components/form/CreateStatisticForm";
import { fetchData } from "./store/actions/dataItemsActions";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();
  const { error, loading, items } = useAppSelector(
    (state) => state.dataFetchReducer
  );
  const { isModal, isCreate } = useAppSelector((state) => state.modalReducer);
  const modalText = isCreate ? "Create new statistic" : "Update statistic";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {isModal && (
        <Modal title={modalText}>
          <CreateStatisticForm />
        </Modal>
      )}
      {loading ? (
        <div className={classes.loading}>
          <svg
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="translate(0 -7.5)">
              <circle cx="50" cy="41" r="10" fill="#c6d851">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="0 50 50;360 50 50"
                ></animateTransform>
                <animate
                  attributeName="r"
                  dur="1s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="0;15;0"
                  keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                ></animate>
              </circle>
              <circle cx="50" cy="41" r="10" fill="#ebd499">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="180 50 50;540 50 50"
                ></animateTransform>
                <animate
                  attributeName="r"
                  dur="1s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="15;0;15"
                  keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                ></animate>
              </circle>
            </g>
          </svg>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={classes.app}>
          <Charts />
          <Table />
        </div>
      )}
    </>
  );
}

export default App;
