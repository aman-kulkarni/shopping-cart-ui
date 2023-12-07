import React from "react";

type Product = {
  name: string;
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
};

type ShoppingCartProps = {
  products: Product[];
};

const ShoppingCart = (props: ShoppingCartProps) => (<div>Hello world</div>);

export default ShoppingCart;
