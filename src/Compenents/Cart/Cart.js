import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const totalAmount = `$${CartCtx.TotalAmount.toFixed(2)}`;

  const hasItem = CartCtx.Items.length > 0;

  const onAddToCart = (item) => {
    CartCtx.AddItem({ ...item, amount: 1 });
  };

  const onRemoveFromCart = (id) => {
    CartCtx.RemoveItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.Items.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onAddToCart.bind(null, item)}
          onRemove={onRemoveFromCart.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount : </span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}> Order </button>}
      </div>
    </Modal>
  );
};

export default Cart;
