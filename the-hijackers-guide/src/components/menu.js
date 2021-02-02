import React, { useState, useEffect } from "react";

/*
 * We will include our MenuItem Component
 */
import MenuItem from "./menuItem";

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'Top' generically references the top of the page
 */
const menuItems = ["topic", "research"];

/*
 * Our menu component
 */
function Menu(props) {
  /*
   * Create the list of MenuItems based on the sections object we have defined above
   */
  const menuList = props.targets.map(target => (
    <MenuItem key={target.key} target={target.target} name={target.key} />
  ));

  /*
   * Return the JSX Menu, complete with nested MenuItems
   */
  return (
    <section className="anchors-container">
      <ul className="anchors-list">{menuList}</ul>
    </section>
  );
}

export default Menu;
