import React from "react";

import PhotoOne from "../../assets/images/2000-1.jpeg";
import PhotoTwo from "../../assets/images/2000-2.jpeg";

export const SectionTwo = () => {
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
        <span className="section_small_title">Partners in Crime</span>
        <h1 className="section_title">2000s</h1>
      </div>

      {/* Polaroids */}
      <div className="polaroid_container">
        <div className="polaroid polaroid_left">
          <div className="polaroid_image_wrapper">
            <img src={PhotoOne} alt="Sonali in the 2000s" />
          </div>

          <p>Start of Chaos ♡</p>
        </div>

        <div className="polaroid polaroid_right">
          <div className="polaroid_image_wrapper">
            <img src={PhotoTwo} alt="Sonali in the 2000s" />
          </div>

          <p>Our Fav Moments ✦</p>
        </div>
      </div>

      {/* Story card */}
      <div className="section_story_card">
        <div className="story_card_tape"></div>

        <h2>Chapter Two ♡</h2>

        <p>
          From stealing food off each other's plates to fighting over absolutely
          everything every Raksha Bandhan, we have truly come a long way. The
          years were filled with arguments, laughter, questionable decisions,
          and enough sibling drama to fill an entire television series. But
          despite all the fighting, we somehow grew up together and made
          countless memories along the way. Although, let's be honest... I'm
          still more awesome. And obviously, more loved.
        </p>
      </div>
    </section>
  );
};
