import React from "react";
import ProductItems from "./ProductItems";
import Card from "../../Compenents/UI/Card";
import classes from "./AvailableProduct.module.css";

const AvailableProducts = () => {
  const PRODUCTS_DATA = [
    {
      id: "z1",
      name: "picture1",
      price: 89.99,
      description: "amazing products with discout of 45%",
      image: "../../Assets/background.jpg",
    },
    {
      id: "z2",
      name: "product 2",
      price: 89.99,
      description: "amazing products with discout of 45%",
      image: "../../Assets/background.jpg",
    },
    {
      id: "z3",
      name: "product 3",
      price: 89.99,
      description: "amazing products with discout of 45%",
      image: "image 3",
    },
    {
      id: "z4",
      name: "product 3",
      price: 89.99,
      description: "amazing products with discout of 45%",
      image: "../../Assets/background.jpg",
    },
    {
      id: "z5",
      name: "product 3",
      price: 89.99,
      description: "amazing products with discout of 45%",
      image: "../../Assets/background.jpg",
    },
    {
      id: "z6",
      name: "product 3",
      price: 89.99,
      description: "amazing products with discout of 45%",
      image: "../../Assets/background.jpg",
    },
  ];

  const productlist = PRODUCTS_DATA.map((product) => (
    <ProductItems
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
  return <div className={classes.card}>{productlist}</div>;
};

export default AvailableProducts;
