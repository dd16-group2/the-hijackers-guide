import { Link, useLocation } from "react-router-dom";
import Grid from "./grid";

function Section(props) {
  let location = useLocation();

  const COLORS = {
    "01": "#9F55DD",
    "02": "#1EDA96",
    "03": "#FFAF14",
    "04": "#3BB8FF",
    black: "#1C0F13"
  };

  const DARK_COLORS = {
    "01": "#a05ebf",
    "02": "#16a873",
    "03": "#c2840e",
    "04": "#3BB8FF"
  };

  const TITLES = {
    "01": "Efficient hashtag",
    "02": "Proper social media",
    "03": "Perfect moment",
    "04": "Effective tactic"
  };

  return (
    <div
      className="guidelines-section"
      style={{
        backgroundColor: COLORS[props.sectionId],
        ...(location.pathname ===
        "/the-hijackers-guide/guidelines/guideline-" + props.sectionId
          ? { width: "100%" }
          : {})
      }}
    >
      {location.pathname !==
      "/the-hijackers-guide/guidelines/guideline-" + props.sectionId ? (
        <Link
          to={"/the-hijackers-guide/guidelines/guideline-" + props.sectionId}
        >
          <div className="preview-video-container">
            {location.pathname === "/the-hijackers-guide/guidelines" && (
              <div>
                <video
                  loop
                  className="preview-video"
                  onMouseOver={event => event.target.play()}
                  onMouseOut={event => event.target.pause()}
                >
                  <source
                    src={"./assets/preview-" + props.sectionId + ".mp4"}
                  />
                </video>
                <div
                  className="duotone duotone-dark"
                  style={{ backgroundColor: DARK_COLORS[props.sectionId] }}
                />
                <div
                  className="duotone duotone-light"
                  style={{ backgroundColor: COLORS[props.sectionId] }}
                />
              </div>
            )}
          </div>
        </Link>
      ) : (
        <Grid color={COLORS[props.sectionId]} sectionId={props.sectionId} />
      )}
      {location.pathname !==
        "/the-hijackers-guide/guidelines/guideline-" + props.sectionId && (
        <div className="sectionTitle-container">
          <h2
            className="sectionTitle-title"
            style={
              location.pathname !== "/the-hijackers-guide/guidelines"
                ? {
                    textOrientation: "mixed",
                    writingMode: "vertical-lr",
                    fontSize: "1vw",
                    transform: "rotate(180deg)"
                  }
                : { undefined }
            }
          >
            {TITLES[props.sectionId]}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Section;
