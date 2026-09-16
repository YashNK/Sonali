import Sonali from "../../assets/images/sonali.png";
import Instagram from "../../assets/images/instagram.webp";
import Linkedin from "../../assets/images/linkedin.webp";
import Youtube from "../../assets/images/youtube.webp";
import "./landing-page.css";

import { SectionOne } from "../1990";
import { SectionTwo } from "../2000";
import { SectionThree } from "../2010";
import { SectionFour } from "../2020";

export const LandingPage = () => {
  return (
    <div className="landing_page">
      {/* Flying clouds */}
      <div className="cloud cloud_one">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cloud cloud_two">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cloud cloud_three">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cloud cloud_four">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Cute floating decorations */}
      <div className="cute_decor decor_one">✦</div>
      <div className="cute_decor decor_two">♡</div>
      <div className="cute_decor decor_three">✧</div>
      <div className="cute_decor decor_four">♡</div>

      <div className="landing_page_content">
        <div className="landing_intro">
          <b className="landing_page_header_one">Welcome to</b>

          <h1 className="landing_page_header">
            Sonali's
            <br />
            <span>WORLD!</span>
          </h1>

          <div className="character_wrapper">
            <div className="character_glow"></div>

            <img src={Sonali} alt="Sonali" className="sonali" />
          </div>

          <div className="landing_page_subheader">
            This is a quick recap of our favourite slay queen 💅. A woman who
            never gave up on her dreams, always stood up for what was right, and
            defended her family through every high and low.
            <br />
            <br />
            Here, you'll get to witness greatness.
            <div className="success_badge">PEAK INDIAN SUCCESSFUL WOMAN 👑</div>
          </div>

          <button
            onClick={() =>
              document.getElementById("section_one")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="landing_page_button"
          >
            <span>Ready to Visit Greatness?</span>
            <span className="button_arrow">♡</span>
          </button>

          <div className="socials">
            <div
              className="social_bubble"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sonaaaaaaaaali",
                  "_blank",
                )
              }
            >
              <img src={Instagram} alt="Instagram" className="landing_icon" />
            </div>

            <div
              className="social_bubble"
              onClick={() =>
                window.open("https://www.youtube.com/@PerfectFlicks", "_blank")
              }
            >
              <img src={Youtube} alt="Youtube" className="landing_icon" />
            </div>

            <div
              className="social_bubble"
              onClick={() =>
                window.open(
                  "https://ca.linkedin.com/in/sonali-kamnani-559198140",
                  "_blank",
                )
              }
            >
              <img src={Linkedin} alt="Linkedin" className="landing_icon" />
            </div>
          </div>
        </div>

        {/* Leave these sections untouched */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
};
