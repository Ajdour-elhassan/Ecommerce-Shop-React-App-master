import React, { Fragment } from "react";
import showcaseImage from "../../Assets/background.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2> Make-UP-Shop </h2>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={showcaseImage} alt="Showcase" />
      </div>
    </Fragment>
  );
};

export default Header;
