import React from "react";

import PhotoOne from "../../assets/images/2010-1.jpeg";
import PhotoTwo from "../../assets/images/2010-2.jpeg";

export const SectionThree = () => {
  return (
    <section className="section">
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
        <span className="section_small_title">Becoming Her</span>
        <h1 className="section_title">2010s</h1>
      </div>

      {/* Polaroids */}
      <div className="polaroid_container">
        <div className="polaroid polaroid_left">
          <div className="polaroid_image_wrapper">
            <img src={PhotoOne} alt="Sonali in the 2010s" />
          </div>

          <p>Our Best Trip Yet ♡</p>
        </div>

        <div className="polaroid polaroid_right">
          <div className="polaroid_image_wrapper">
            <img src={PhotoTwo} alt="Sonali in the 2010s" />
          </div>

          <p>Fav moments ✦</p>
        </div>
      </div>

      {/* Story card */}
      <div className="section_story_card">
        <div className="story_card_tape"></div>

        <h2>Chapter Three ♡</h2>

        <p>
          Somewhere along the way, our bond started changing. We grew older,
          started understanding each other a little better, and slowly became
          more than just family. We became people who could genuinely count on
          each other. These were also the years when you started becoming the
          woman you were always meant to be. From participating in fashion shows
          to exploring your passions and stepping into new experiences, you
          started finding your confidence and discovering the person you wanted
          to become. And honestly? The heroine arc was getting pretty serious.
        </p>
      </div>
    </section>
  );
};
