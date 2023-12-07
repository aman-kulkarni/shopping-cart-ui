import React from "react";
import ReactDOM from "react-dom";
import ShoppingCart from "./ShoppingCart"
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ShoppingCart
        products={[
          {
            name: "T-shirt",
            sku: "CIM-12345",
            description: "Highly customizable t-shirts",
            quantity: 5,
            unitPrice: 10
          },
          {
            name: "500 Business Cards",
            sku: "CIM-67890",
            description: "Wow your clients with professional business cards!",
            quantity: 1,
            unitPrice: 30
          },
          {
            name: "Baseball Hat",
            sku: "CIM-19283",
            description: "One-size-fits-all customizable baseball hat",
            quantity: 10,
            unitPrice: 8
          }
        ]}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);