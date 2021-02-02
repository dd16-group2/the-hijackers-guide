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
      <div className="popup-box"
        style={{
          width: (props.width || 22) + "em",
          transform: "scale(" + contentOpacity + ")",
          opacity: contentOpacity
        }}
      >
      {props.type !== 'video' ? (<img alt={props.alt} src={props.src}/>) : (<video src={props.src} muted autoPlay loop/>)}
      </div>
      <u
        style={{
          color: props.textColor || "white",
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
