import { useLocation } from "react-router-dom";
import Section from "../components/section";

function GuidelinesPage() {
  let location = useLocation();

  return (
    <div className="flex-wrapper" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Section sectionId="01" />

      <Section sectionId="02" />

      <Section sectionId="03" />

      <Section sectionId="04" />

      {location.pathname === "/the-hijackers-guide/guidelines" && (
        <h1>
          {" "}
          The Hijacker's Guide <br /> to Digital Activism{" "}
        </h1>
      )}
    </div>
  );
}

export default GuidelinesPage;
