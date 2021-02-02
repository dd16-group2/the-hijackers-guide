import { React, useRef, useState, useEffect } from "react";

function CarouselImage(props) {
  return (
    <div
      className="image-wrapper"
      style={{ width: props.width * 0.32, height: props.height * 0.9 }}
    >
      <div style={{ position: "relative" }}>
        <img alt="post" src={props.src} />
        <div className="image-labels-container">
        <div className="image-label" style={{ backgroundColor: props.color }}>
          {props.hashtag}
        </div>
        <div className="image-label" style={{ backgroundColor: props.color }}>
          {props.type}
        </div>
        </div>
      </div>
    </div>
  );
}
export default CarouselImage;
