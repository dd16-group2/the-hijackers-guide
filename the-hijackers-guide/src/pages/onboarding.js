import { Link } from "react-router-dom";

function Onboarding() {
  return (
    <div className="onboarding-wrapper">
      <h3>
        Hashtag hijacking typically refers to a situation in which a hashtag
        becomes commandeered by others in the community and is then instead used
        to mock, satirize or negatively critique the original hashtag sponsor
        Nowadays, it is a powerful tool of digital activism and it represents a
        new way of standing up for certain causes exploiting the power of
        collective actions. A single hashtag hijacked event can involve
        thousands of people and each contribution is essential to drown out the
        feed.
        <br />
        <br />
        <Link to="/the-hijackers-guide/guidelines">
          Begin the experience
        </Link>{" "}
        to get a complete view of the phenomenon and how to take part in it.
      </h3>
    </div>
  );
}

export default Onboarding;
