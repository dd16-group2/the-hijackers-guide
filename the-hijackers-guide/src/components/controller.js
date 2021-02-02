import { React, useState, useRef, useEffect } from "react";
import Lottie from "react-lottie";
import playToPause from "../lottie/play_to_pause.json";
import pauseToPlay from "../lottie/pause_to_play.json";

function Controller(props) {
  const COLORS = {
    "01": "#9F55DD",
    "02": "#1EDA96",
    "03": "#FFAF14",
    "04": "#3BB8FF"
  };

  const LIGHT_COLORS = {
    "01": "#c79aed",
    "02": "#c79aed",
    "03": "#c79aed",
    "04": "#c79aed"
  };
  const volumeWidth = 80;
  const volumeHandlerRadius = 6;
  const [movingVolume, setMovingVolume] = useState(false);
  const volumeSlider = useRef(null);

  const handleDrag = function(e) {
    if (movingVolume) {
      let sliderLeft = volumeSlider.current.getBoundingClientRect().left;
      let mousePos = e.pageX - sliderLeft;
      if (mousePos <= volumeWidth && mousePos >= 0) {
        props.setVolume(mousePos / volumeWidth);
      } else if (mousePos < 0) {
        props.setVolume(0);
      } else if (mousePos > volumeWidth) {
        props.setVolume(1);
      }
    }
  };

  const handleClick = function(e) {
    let sliderLeft = volumeSlider.current.getBoundingClientRect().left;
    let mousePos = e.pageX - sliderLeft;
    if (mousePos <= volumeWidth && mousePos >= 0) {
      props.setVolume(mousePos / volumeWidth);
    } else if (mousePos < 0) {
      props.setVolume(0);
    } else if (mousePos > volumeWidth) {
      props.setVolume(1);
    }
  };

  const ungrab = function() {
    setMovingVolume(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", ungrab);

    // cleanup this component
    return () => {
      window.removeEventListener("mouseup", ungrab);
    };
  }, []);

  function sec2time(timeInSeconds) {
    var pad = function(num, size) {
        return ("000" + num).slice(size * -1);
      },
      time = parseFloat(timeInSeconds).toFixed(3),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60);

    return pad(minutes, 2) + ":" + pad(seconds, 2);
  }

  return (
    <div
      className="controller-container"
      style={{ height: props.height, width: props.width }}
    >
      <div
        className="slider-container"
        onMouseDown={event => {
          event.preventDefault();
          props.setMoving(true);
          props.handleClick(event);
        }}
      >
        <div className="slider-padding" />
        <div
          className="slider-background"
          style={{ backgroundColor: "rgb(90, 90, 90)" }}
        >
          <div
            className="controller-slider"
            style={{
              width: (props.width * props.currentTime) / props.duration,
              backgroundColor: COLORS[props.sectionId]
            }}
          >
            <div
              className="controller-handler"
              onMouseDown={event => {
                event.preventDefault();
                props.setMoving(true);
              }}
              style={{
                left: (props.width * props.currentTime) / props.duration - 4,
                backgroundColor: COLORS[props.sectionId]
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="controller-button"
        onClick={props.playVideos}
        style={{
          marginLeft: "1.5em",
          marginTop: 0
        }}
      >
        {props.isPlaying && !props.ended && (
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              animationData: playToPause,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            height={24}
            width={24}
            isStopped={!props.isPlaying}
          />
        )}
        {!props.isPlaying && !props.ended && (
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              animationData: pauseToPlay,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            height={24}
            width={24}
            isStopped={props.isPlaying}
          />
        )}
        {props.ended && (
          <img
            style={{ height: 24, width: 24, marginTop: "0.15em" }}
            alt="replay"
            src={process.env.PUBLIC_URL + "/assets/replay_button.svg"}
          />
        )}
      </button>
      <div className="volume-container" onMouseMove={handleDrag}>
        <button
          className="controller-button"
          onClick={event => {
            event.preventDefault();
            if (props.volume > 0) {
              props.setVolume(0);
            } else {
              props.setVolume(1);
            }
          }}
        >
          <img
            alt="volume"
            src={props.volume > 0 ? (process.env.PUBLIC_URL + "/assets/volume_button.svg") : (process.env.PUBLIC_URL + "/assets/volume_button_muted.svg")}
          />
        </button>
        <div
          className="volume-slider-container"
          onMouseDown={event => {
            event.preventDefault();
            setMovingVolume(true);
            handleClick(event);
          }}
        >
          <div
            className="volume-slider-background"
            ref={volumeSlider}
            style={{ backgroundColor: COLORS[props.sectionId] }}
          >
            <div
              className="volume-slider"
              style={{
                width: props.volume * volumeWidth
              }}
            >
              <div
                className="volume-handler"
                style={{
                  left: props.volume * volumeWidth - volumeHandlerRadius
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="time-container">
        {sec2time(props.currentTime) + " / " + sec2time(props.duration)}
      </div>
    </div>
  );
}

export default Controller;
