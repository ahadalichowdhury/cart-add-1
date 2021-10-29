import React from "react";

export default function Header() {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>
        <a href="#/signini">Signin</a>
      </div>
    </header>
  );
}
