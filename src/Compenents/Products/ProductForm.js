import { useRef, useState } from "react";
import classes from "./ProductForm.module.css";
import Input from "../UI/Input";

const ProductItemsForm = (props) => {
  const amountInputRef = useRef();
  const [AmountIsValid, SetAmountIsValid] = useState(true);

  // Submiting ADDING to CART BUTTON
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmoutNumber = +enteredAmount; // Converted To number
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount.trim().length > 5 ||
      enteredAmount.trim().length < 1
    ) {
      SetAmountIsValid(false);
      return;
    }
    props.OnAddToCart(enteredAmoutNumber);
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add to Cart </button>
      {!AmountIsValid && <p> Please Entered A valid Amount (1-5) </p>}
    </form>
  );
};

export default ProductItemsForm;
