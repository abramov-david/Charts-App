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
      </div>
    </>
  );
}
