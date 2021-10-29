import { useState } from "react";
import "./App.css";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Main from "./Components/Main";
import dataList from "./dataList";

function App() {
  const { products } = dataList;
  const [cartItem, setCartItem] = useState([]);

  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <Main onAdd={onAdd} products={products} />
      <Basket onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />
    </div>
  );
}

export default App;
