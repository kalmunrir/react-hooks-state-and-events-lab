import React, {useState} from "react";

function Item({ name, category }) {
  
  const [cart, setCart] = useState(false);

  const itemClass = cart? "in-cart" : "";
  const itemInCartText = cart? "Remove from Cart" : "Add to Cart";
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setCart(!cart)}>{itemInCartText}</button>
    </li>
  );
}

export default Item;
