import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import "../styles/MenuItem.css";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = MenuList.filter((menuItem) =>
    menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          placeholder="Search for a pizza..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="menuList">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((menuItem, key) => (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          ))
        ) : (
          <p className="noResults">No pizzas match your search!</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
