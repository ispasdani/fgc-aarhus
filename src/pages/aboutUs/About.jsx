import "./about.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutImgOne from "../../assets/about.jpeg";
import aboutImgTwo from "../../assets/eventImg.png";

export const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="about">
      <p className="about-title">About Us</p>
      <p className="about-desc">
        FGC is the biggest gaming community in Aarhus and we are constantly
        growing! We hold events every Wednesday in Dokk1 and play fighting games
        together.{" "}
      </p>
      <div className="about-carousel">
        <Slider {...settings}>
          <img src={aboutImgTwo} alt="fgc-image" className="about-img" />
          <img src={aboutImgOne} alt="fgc-image" className="about-img" />
        </Slider>
      </div>
      <div className="about-quest-wrapper">
        <p>Can I join the community if I'm not Danish</p>
        <p>and don't have experience in fighting games?</p>
      </div>
      <p className="about-desc">
        We are open for everyone, no matter their skills or nationality. So if
        you are interested in fighting games, don't hesitate and join us! If you
        are a bit anxious about being new in the community, you can get yourself
        a buddy, who will make sure you will feel comfortable from the very
        beginning
      </p>
      <div className="about-quest-wrapper">
        <p>What do I have to do to become a member?</p>
      </div>
      <p className="about-desc">
        All you have to do is create an account and show up on the next meeting
        on Wednesday{" "}
      </p>
      <div className="btn-about-wrapp">
        <div className="about-btn">Become a member</div>
      </div>
    </div>
  );
};
