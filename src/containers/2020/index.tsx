import PhotoOne from "../../assets/images/2020-1.jpeg";
import PhotoTwo from "../../assets/images/2020-2.jpeg";

export const SectionFour = () => {
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
        <span className="section_small_title">The Dream</span>
        <h1 className="section_title">2020s</h1>
      </div>

      {/* Polaroids */}
      <div className="polaroid_container">
        <div className="polaroid polaroid_left">
          <div className="polaroid_image_wrapper">
            <img src={PhotoOne} alt="Sonali in the 2020s" />
          </div>

          <p>Best Couple Ever ♡</p>
        </div>

        <div className="polaroid polaroid_right">
          <div className="polaroid_image_wrapper">
            <img src={PhotoTwo} alt="Sonali in the 2020s" />
          </div>

          <p>Heroine ✦</p>
        </div>
      </div>

      {/* Story card */}
      <div className="section_story_card">
        <div className="story_card_tape"></div>

        <h2>Chapter Four ♡</h2>

        <p>
          And then, finally, you found your dream man and got the dream wedding.
          Everything you'd imagined seemed to fall into place. You had the love,
          the family, the memories, the celebrations, and somehow, you had
          become exactly who you'd always wanted to be. Back in the '90s, you
          dreamed of being a heroine. Years later... You finally became one.
          Everyone's favourite. The star of the family. The woman with the
          main-character energy. And, of course... #BestInfluencerInTheWorld 👑
        </p>
      </div>
    </section>
  );
};
