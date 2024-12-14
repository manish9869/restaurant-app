import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="menuItemDetails">
        <h1>{name}</h1>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItem;
