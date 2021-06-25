import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderButton.module.css";
import CartContext from "../../Store/Cart-Context";

const HeaderButton = (props) => {
  const cartContext = useContext(CartContext);
  const [BtnIsHighlighed, SetHighlightedBtn] = useState(false);

  //  Amount Strats from 0
  const NumberOfCartItems = cartContext.Items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  // const NumberOfCartItems = cartContext.Items.length;
  const btnClass = `${classes.button} ${BtnIsHighlighed ? classes.bump : ""}`;

  // Object Distructreing
  // cartContext.Items.length
  const { Items } = cartContext;

  useEffect(() => {
    if (Items.length === 0) {
      return;
    }
    SetHighlightedBtn(true);
    // Timer of Bump
    const timer = setTimeout(() => {
      SetHighlightedBtn(false);
    }, 300);
    //  Set Cleaner
    return () => {
      clearTimeout(timer);
    };
  }, [Items]);

  return (
    <div className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}> Cart ( {NumberOfCartItems} ) </span>
    </div>
  );
};

export default HeaderButton;
