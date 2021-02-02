import { React, useState, useEffect} from "react";

function OnboardingImage(props) {
  const [visible, setVisible] = useState('block');
  const [scale, setScale] = useState(0);
  return (
    <img className="onboarding-image" alt={props.alt} src={props.src}
    style={{top: props.top, left: props.left, transform: "rotate(" + props.rotation + "deg) scale(" + scale + ")", display: visible, transition: 'transform 0.25s', transitionDelay: props.delay + "s" }}
    onMouseEnter={()=>{setVisible('none')}}
    onLoad={()=>{setScale(1)}} />
  );
}
export default OnboardingImage;
