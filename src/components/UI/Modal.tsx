import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { closeModal } from "../../store/actions/modalActions";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

export default function Modal({ children, title }: ModalProps) {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div className={classes.backdrop} onClick={clickHandler} />
      <div className={classes.modal}>
        <h1 className={classes.title}>{title}</h1>
        {children}
        <div className={classes.closeModalIcon} onClick={clickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Close</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
