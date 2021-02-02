import { React, useState} from "react";

function Credits(props) {
  const [creditsHeight, setCreditsHeight] = useState(0);
  const defaultStyle = {width: props.width * 0.8, transform: 'translateY(' + props.height + 'px)', transition: 'none'}
  const [style, setStyle] = useState(defaultStyle);
  let getHeight = function(e){
    let imageHeight = e.target.height;
    setStyle({width: props.width * 0.8, transform: 'translateY(-' + imageHeight + 'px)', transition: 'transform 20s', transitionTimingFunction: 'linear', transitionDelay: '1.5s'})
  }

  let restartAnimation = function(e){
    setStyle(defaultStyle);
    let imageHeight = e.target.height;
    setTimeout(function(){ setStyle({width: props.width * 0.8, transform: 'translateY(-' + imageHeight + 'px)', transition: 'transform 20s', transitionTimingFunction: 'linear', transitionDelay: '1.5s'}); }, 100);
  }

  return (
    <img className="credits" alt={"credits video" + props.sectionId} src={process.env.PUBLIC_URL + "/assets/section" + props.sectionId +"/credits.svg"}
    style={style}
    onLoad={event => getHeight(event)}
    onTransitionEnd = {event => restartAnimation(event)}
    />
  );
}
export default Credits;
