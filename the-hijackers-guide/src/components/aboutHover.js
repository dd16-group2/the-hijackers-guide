import { React, useState } from "react";

function AboutHover(props) {
  const [contentOpacity, setOpacity] = useState(0);
  return (
    <div
      style={{
        display: "inline-flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseEnter={() => {
        setOpacity(1);
      }}
      onMouseOut={() => {
        setOpacity(0);
      }}
    >
      <u>{props.text}</u>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: (props.width || 22) + "em",
          height: ((props.width || 22) * 9) / 16 + "em",
          backgroundColor: "rgb(120, 120, 120)",
          pointerEvents: "none",
          transform: "scale(" + contentOpacity + ")",
          opacity: contentOpacity,
          transition: "opacity 0.2s, transform 0.3s",
          borderRadius: "0.3em",
          zIndex: 2
        }}
      ></div>
      <u
        style={{
          color: "white",
          position: "absolute",
          opacity: contentOpacity,
          transition: "opacity 0.2s",
          zIndex: 2
        }}
      >
        {props.text}
      </u>
    </div>
  );
}

export default AboutHover;
