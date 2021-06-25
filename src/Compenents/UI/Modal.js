import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Modeloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};

const Modal = (props) => {
  // Using & Dealing with React Portal
  const PortalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, PortalElement)}
      {ReactDOM.createPortal(
        <Modeloverlay> {props.children} </Modeloverlay>,
        PortalElement
      )}
    </Fragment>
  );
};

export default Modal;
