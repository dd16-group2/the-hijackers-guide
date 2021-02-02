import { Link } from "react-router-dom";
import OnboardingImage from "../components/onboardingImage";
import AboutHover from "../components/aboutHover";

function Onboarding() {

  let items = [];
  for (let i = 0; i < 40; i++){
    items.push(<OnboardingImage key={i}
    src={process.env.PUBLIC_URL +
    "/assets/onboarding/post/" +
    i +
    ".jpg"}
    alt={"post" + i}
    top={Math.random() * (window.innerHeight * 0.5) + (window.innerHeight * 0.2)}
    left={Math.random() * (window.innerWidth * 0.6)}
    rotation={-15 + (Math.random() * 30)}
    delay={Math.random() * 0.5}
    />);
  }

  return (
    <div className="onboarding-wrapper">
      <h3>
        Hashtag hijacking occurs when a hashtag is used improperly
        to <AboutHover
        src={
          process.env.PUBLIC_URL +
          "/assets/onboarding/mock.png"
        }
        alt= "mock"
        text="mock"
        width= {12} />, <AboutHover
        src={
          process.env.PUBLIC_URL +
          "/assets/onboarding/satirize.png"
        }
        alt= "satirize"
        text="satirize"
        width= {12} />, or <AboutHover
        src={
          process.env.PUBLIC_URL +
          "/assets/onboarding/critique.png"
        }
        alt= "critique"
        text="critique"
        width= {12} /> its original meaning or sponsor.<br/><br/>

        Nowadays, it is a powerful tool for digital activism, to stand up for certain
        causes exploiting the power of collective actions.
        <br />
        <br />
      </h3>
      <Link to="/the-hijackers-guide/guidelines">
        <div className="start-link">BEGIN THE EXPERIENCE <br/>
        <div className="start-arrow"/>
        </div>
      </Link>{" "}
      <div className="onboarding-images-container">
      {items}
      </div>
    </div>
  );
}

export default Onboarding;
