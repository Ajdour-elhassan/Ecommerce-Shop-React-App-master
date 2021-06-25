import { useReducer } from "react";
import CartContext from "./Cart-Context";

// State
const DefaultCartState = {
  Items: [],
  TotalAmount: 0,
};
// Action
const cartReducer = (state, action) => {
  // ADDING ITEM TO CART
  if (action.type === "ADD_TO_CART") {
    const UpdateTotalAmount =
      state.TotalAmount + action.item.price * action.item.amount;
    // Finding Exist idex of Item in Array , Here we check of theres is a multiple item in array
    const existingIndexOfItemInCart = state.Items.findIndex(
      (item) => item.id === action.item.id
    ); // It returns to True or false when there an Item that has the same id in the cart
    // Looking for exiting Cart Item if Thres is already that item in array
    const existingCartItem = state.Items[existingIndexOfItemInCart];
    let UpdateItems;
    if (existingCartItem) {
      const UpdateItem = {
        //  Copy the old and existing objects & Updating Amount
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //  Copy the old objects
      UpdateItems = [...state.Items];
      //  Overwriting
      UpdateItems[existingIndexOfItemInCart] = UpdateItem;
    } else {
      UpdateItems = state.Items.concat(action.item);
    }
    return {
      Items: UpdateItems,
      TotalAmount: UpdateTotalAmount,
    };
  }

  // REMOVING ITEM IN THE CART
  if (action.type === "REOMVE") {
    const ExistingItemInCart = state.Items.findIndex(
      (item) => item.id === action.id
    );
    const ExistingItem = state.Items[ExistingItemInCart];
    const updateTotalAmount = state.TotalAmount - ExistingItem.price;
    //  Set a new variabel
    let updateItems;
    if (ExistingItem.amount === 1) {
      updateItems = state.Items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...ExistingItem, amount: ExistingItem.amount - 1 };
      updateItems = [...state.Items];
      updateItems[ExistingItemInCart] = updateItem;
    }
    return {
      Items: updateItems,
      TotalAmount: updateTotalAmount,
    };
  }

  return DefaultCartState;
};

const CartProvider = (props) => {
  // Use Cart Reducer
  const [cartState, DispatchCartState] = useReducer(
    cartReducer,
    DefaultCartState
  );

  // Adding Items to the Cart
  const AddItemHandler = (item) => {
    DispatchCartState({
      type: "ADD_TO_CART",
      item: item,
    });
  };

  // Removing items in Cart based on ID
  const RemoveItemHandler = (id) => {
    DispatchCartState({
      type: "REMOVE",
      id: id,
    });
  };

  // CartContext Helper
  const cartContext = {
    Items: cartState.Items,
    TotalAmount: cartState.TotalAmount,
    AddItem: AddItemHandler,
    RemoveItem: RemoveItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
