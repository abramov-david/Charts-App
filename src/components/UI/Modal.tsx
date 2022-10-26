import React from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}
