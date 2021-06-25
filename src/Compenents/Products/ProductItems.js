import React, { useContext } from "react";
import classes from "./ProductItems.module.css";
import Card from "../../Compenents/UI/Card";
import ProductForm from "./ProductForm";
import CartContext from "../../Store/Cart-Context";

const ProductItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const CartCtx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    CartCtx.AddItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <Card>
      <li className={classes.product}>
        <div>
          <img
            className={classes.img}
            src={props.image}
            alt="productimagescreen"
          />
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
          <h4>
            <ProductForm OnAddToCart={onAddToCartHandler} />
          </h4>
          {/* <button onClick={onAddToCartHandler}> + Add to Cart </button> */}
        </div>
      </li>
    </Card>
  );
};

export default ProductItems;
