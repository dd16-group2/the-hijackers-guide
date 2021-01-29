import React, { useState, useEffect } from "react";

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
function MenuItem(props) {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = event => {
    event.preventDefault();
    props.target.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessability!
   */
  return (
    <li style={{ color: "white" }} className="anchors">
      <a
        href={`#${props.name}`}
        onClick={handleClick}
        ariaLabel={`Scroll to ${props.name}`}
      >
        <div className="anchors-button">{props.name}</div>
      </a>
    </li>
  );
}

export default MenuItem;
