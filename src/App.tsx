import React, { useEffect } from "react";
import Charts from "./components/charts/Charts";
import Table from "./components/table/Table";
import classes from "./App.module.css";
import Modal from "./components/UI/Modal";
import CreateStatisticForm from "./components/form/CreateStatisticForm";
import { fetchData } from "./store/actions/dataItemsActions";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import logo from "./assets/logo.png";

function App() {
  const dispatch = useAppDispatch();
  const { isError, error, loading, items } = useAppSelector(
    (state) => state.dataFetchReducer
  );
  const { isModal, isCreate } = useAppSelector((state) => state.modalReducer);
  const modalText = isCreate ? "Create new statistic" : "Update statistic";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  //hide scroll when modal open
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModal]);

  const loadingStatus = loading && !isError;
  const errorStatus = !loading && isError;
  const contentStatus = !loading && !isError;

  return (
    <>
      <div className={classes.mainTitle}>
        <div className={classes.title}>
          <h1>Statistic React App</h1>
          <p>React.js,Redux,Typescript,Recharts</p>
        </div>
        <img src={logo} alt="" />
      </div>
      {isModal && (
        <Modal title={modalText}>
          <CreateStatisticForm />
        </Modal>
      )}

      {loadingStatus && (
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
      )}
      {contentStatus && (
        <div className={classes.app}>
          <Charts />
          <Table />
        </div>
      )}
      {errorStatus && (
        <div className={classes.error}>
          <svg
            viewBox="0 0 100 100"
            y="0"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            version="1.1"
            width="50px"
            height="50px"
          >
            <g>
              <linearGradient
                y2="73.744"
                x2="65.885"
                y1="26.41"
                x1="34.218"
                gradientUnits="userSpaceOnUse"
                id="SVGID_1_"
              >
                <stop stop-color="#e15c64" offset="0"></stop>
                <stop stop-color="#b0484f" offset="1"></stop>
              </linearGradient>
              <circle
                stroke-miterlimit="10"
                stroke-width="3.5"
                stroke="#323232"
                fill="url(#SVGID_1_)"
                r="40"
                cy="50"
                cx="50"
              ></circle>
              <path
                d="M31.5 68.5l37-37"
                stroke-miterlimit="10"
                stroke-width="3.5"
                stroke="#fff"
                fill="none"
              ></path>
              <path
                d="M68.5 68.5l-37-37"
                stroke-miterlimit="10"
                stroke-width="3.5"
                stroke="#fff"
                fill="none"
              ></path>
            </g>
          </svg>
          <h2>Oops, something go wrong... :(</h2>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default App;
