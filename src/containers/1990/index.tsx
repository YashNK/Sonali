import React from "react";
import "./section.css";

import PhotoOne from "../../assets/images/1990-1.jpeg";
import PhotoTwo from "../../assets/images/1990-2.jpeg";

export const SectionOne = () => {
  return (
    <section className="section" id="section_one">
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
      {/* Section heading */}
      <div className="section_title_wrapper">
        <span className="section_small_title">A little trip through</span>
        <h1 className="section_title">1990s</h1>
      </div>

      {/* Polaroids */}
      <div className="polaroid_container">
        <div className="polaroid polaroid_left">
          <div className="polaroid_image_wrapper">
            <img src={PhotoOne} alt="Sonali in the 1990s" />
          </div>

          <p>Where it all began ♡</p>
        </div>

        <div className="polaroid polaroid_right">
          <div className="polaroid_image_wrapper">
            <img src={PhotoTwo} alt="Sonali in the 1990s" />
          </div>

          <p>Little moments ✦</p>
        </div>
      </div>

      {/* Story card */}
      <div className="section_story_card">
        <div className="story_card_tape"></div>

        <h2>Chapter One ♡</h2>

        <p>
          Born in 1993, she quickly became the heart and soul of the Kamnani
          family. Loved by everyone around her, she had the kind of presence
          that made her impossible not to adore. She was truly a heroine in the
          making, everyone's favourite, everyone's pride, and the star of the
          family. Sadly, that wasn't going to last forever... Because I was on
          my way. Hehehe.
        </p>

        <p>
          From small moments to big dreams, this was the beginning of Sonali's
          journey.
        </p>
      </div>
    </section>
  );
};
