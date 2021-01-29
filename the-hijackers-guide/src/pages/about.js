import { React, useState, useRef } from "react";
import AboutHover from "../components/aboutHover";
import Menu from "../components/menu";
import introVideo from "../assets/about/disclosure_intro.mp4";

function About() {
  const [phase2Opacity, setPhase2Opacity] = useState(0);
  const targets = [
    {
      key: "topic",
      target: useRef(null)
    },
    {
      key: "research",
      target: useRef(null)
    },
    {
      key: "project",
      target: useRef(null)
    },
    {
      key: "dataset",
      target: useRef(null)
    },
    {
      key: "authors",
      target: useRef(null)
    }
  ];

  return (
    <div>
      <Menu targets={targets} />
      <div className="about-container">
        <div className="about-header-container">
          <div className="about-header">
            <h1> About </h1>
          </div>
        </div>
        <div className="wrapper">
          <h3>
            <div
              id="topic"
              ref={targets[0].target}
              style={{ position: "absolute", top: "-5em" }}
            />
            In a context characterized by constraints and limitations to
            people's mobility, protests are also moving to the digital
            environment. Over the course of the year, more and more users have
            realized that the power exercised online can translate into real
            change and that, if used correctly, social media can become powerful
            tools for making one's voice heard.
          </h3>

          <div className="column-container">
            <div className="column">
              <p>
                A hashtag is a powerful tool to increase audience engagement. It
                creates a conversation about a topic labelling posts. Through
                hashtags, users join virtual debates and when the political,
                social, or cultural stance of a group of users is not shared by
                others, a hashtag hijack can occur. It is a collective action
                which involves thousands of people, organized into communities,
                who produce a clashing of texts, images, videos from different
                audiences. The result is a disorientation and virtual
                encroachment of space.
              </p>
              <p>
                This phenomenon is increasingly engaging a generation of experts
                in online mobilization, with organizational skills and a deep
                understanding of social media. Among these communities, the most
                powerful is the fan-base of K-Pop with millions of fans around
                the world. Members of this community, who decided to start or
                take part in a hijack, post contents related to their favorite
                K-Pop star: memes, images, quotes, music video frames, selfie,
                but mostly fan-cams (video that focuses on a person performing).
              </p>
            </div>
            <div className="column">
              <p>
                <video
                  style={{
                    width: "100%",
                    marginTop: "0.5em",
                    marginBottom: "1em"
                  }}
                  muted
                  autoPlay
                  loop
                >
                  <source src={introVideo} />{" "}
                </video>
                The K-pop fandoms hijacked many hashtags: <br />
                <AboutHover text="#StandWithTuckerCarlson" />,{" "}
                <AboutHover text="#ExposeAntifa" />,
                <AboutHover text="#WhiteOutWednesday" />,{" "}
                <AboutHover text="#CalminKirkland" />,
                <AboutHover text="#WhiteLivesMatter" />,{" "}
                <AboutHover text="#AllLivesMatter" />,{" "}
                <AboutHover text="#Pro-Trump" />, <AboutHover text="#MAGA" />{" "}
                and many others.
              </p>
            </div>
          </div>
          <hr />
          <div className="column-container">
            <div className="column">
              <h3 style={{ padding: 0 }}>
                <div
                  id="research"
                  ref={targets[1].target}
                  style={{ position: "absolute", top: "-4em" }}
                />
                The starting point of this website is the project{" "}
                <a
                  href="https://doksavpc.github.io/dd16-phase2-group02/"
                  onMouseEnter={() => {
                    setPhase2Opacity(1);
                  }}
                  onMouseOut={() => {
                    setPhase2Opacity(0);
                  }}
                >
                  Stan Wars: the rise of a new army
                </a>
                , which contains the results of our multi-channel research about
                hashtag hijacking and stan culture.{" "}
              </h3>
              <p>
                The goal was to analyze the phenomenon of stan groups’ online
                activism in its complexity, trying to provide different points
                of view about it. The analysis of K-Pop stans’ role in the
                latest hashtag hijacking has shown that:
              </p>
            </div>
            <div className="column">
              <p>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "black",
                    height: "auto",
                    marginTop: "2em"
                  }}
                >
                  <video
                    style={{ width: "100%", opacity: 0.7 }}
                    muted
                    autoPlay
                    loop
                  >
                    <source src="../assets/about/cover-phase2.mp4" />
                  </video>
                  <div
                    className="phase2-title"
                    style={{ opacity: phase2Opacity }}
                  >
                    <h3>STAN WARS: THE RISE OF A NEW ARMY</h3>
                    <h4>
                      AN ANALYSIS OF K-POP STANS’ ROLE <br /> IN THE LATEST
                      HASHTAG HIJACKINGS
                    </h4>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="flex-list">
            <p className="flex-paragraph">
              <div className="number">1</div>
              <AboutHover text="Collective actions occur very quickly and with a short duration, and its success is correlated to the efficiency of the hashtags used to share it." />
            </p>
            <p className="flex-paragraph">
              <div className="number">2</div>
              <AboutHover text="The number of hijacked posts can be greater than the number of posts related to the original meaning of the hashtag." />
            </p>
            <p className="flex-paragraph">
              <div className="number">3</div>
              <AboutHover text="Users who usually take part in the hijacks shorten their distances by creating hidden networks based on their shared interests and common topics." />
            </p>
            <p className="flex-paragraph">
              <div className="number">4</div>
              <AboutHover text="Newspapers paint the hijackers in many different ways, which can depend on the type of website covering the events." />
            </p>
          </div>
          <hr />
          <p style={{ position: "relative", padding: "2rem 3.5em" }}>
            <div
              id="concept"
              ref={targets[2].target}
              style={{ position: "absolute", top: "-4em" }}
            />
            Hijacking is not a very recent tool, but rather has been used for
            years, few people know exactly what a hashtag hijack is and
            especially how and in what situations to do it. Even though in the
            past few months there has been a lot of talk about hashtag
            hijacking, this phenomenon has rarely been explained in its
            totality. This resulted in many articles, videos, blogs etc.. that
            focused on the "what" instead of the "how".
          </p>
          <h3 style={{ padding: "0 1rem", marginTop: 0 }}>
            But how can a user, who is interested in the topic, who wants to
            participate in an online action, or who wants to make their voice
            heard, take advantage of this tool? What are the basics that you
            need to understand such a complex phenomenon, and therefore to have
            a greater awareness of the events and consequences that this has
            led?
          </h3>
          <p
            style={{
              paddingLeft: "3.5em",
              paddingRight: "3.5em",
              paddingTop: "2rem"
            }}
          >
            In this gap of knowledge is the project, that aims to highlight all
            aspects that compose a hijack by explicating and showing them
            through the use of real cases. It dissects and shows all the parts
            that constitute a hijack, explaining them by giving examples of real
            cases.
          </p>
          <div className="column-container">
            <div className="column">
              <p>
                During the experience, the user moves among the 4 sections that
                represent the key features of a takeover. The site, therefore,
                becomes a manifesto, a guide of what is this form of activism.
              </p>
              <p>
                In each section, the user is informed, through a video, of a
                particular guideline both with a more theoretical explanation,
                almost didactic, and through examples of events in which that
                particular feature is exploited. The use of case studies also
                allows bringing the user back to reality by showing what are the
                physical and material effects of a phenomenon purely digital.
                The content of the site is open and non-sequential, the user can
                move freely within the various sections without a predefined
                path.{" "}
              </p>
            </div>
            <div className="column">
              <p style={{ display: "flex" }}>
                <div
                  style={{
                    width: "28em",
                    height: "5.4em",
                    backgroundColor: "grey",
                    marginRight: "1rem"
                  }}
                />
                The visual choice of dividing the screen with a grid allows to
                exploit various media to narrate the events.
              </p>
              <p style={{ paddingTop: "1rem" }}>
                The user is guided in the narration through the video and the
                narrator's voice but can also actively open and close the
                windows that compose the page giving importance to one typology
                of information rather than another. This multiplicity allows for
                a more complete experience that uses various communication
                canals: visual, textual, auditory, as well as hijack itself
                does. The experience aims to be as horizontal as possible due to
                the very nature of the subject covered.
              </p>
            </div>
          </div>
          <hr />
          <div className="column-container">
            <div className="column">
              <h3 style={{ padding: 0 }}>
                <div
                  id="dataset"
                  ref={targets[3].target}
                  style={{ position: "absolute", top: "-4em" }}
                />
                You can{" "}
                <a href="https://doksavpc.github.io/dd16-phase2-group02/">
                  <AboutHover text="download our dataset" width={18} />
                </a>
                , which collects the most famous hashtag hijackings on media
                from 2010 to 2020.{" "}
              </h3>
            </div>
          </div>
          <p>
            <div
              style={{
                width: "98%",
                height: "20em",
                margin: "1rem",
                backgroundColor: "var(--black)"
              }}
            />
          </p>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default About;
