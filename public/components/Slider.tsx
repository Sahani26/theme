"use client";

import Image from "next/image";
import sliderBg1 from "@/public/assets/images/backgrounds/slider-1-1.jpg";
import sliderBg2 from "@/public/assets/images/backgrounds/slider-1-2.jpg";
import sliderBg3 from "@/public/assets/images/backgrounds/slider-1-3.jpg";

import sliderImg1 from "@/public/assets/images/resources/main-slider-img-1-1.png";
import sliderImg2 from "@/public/assets/images/resources/main-slider-img-1-2.png";
import sliderImg3 from "@/public/assets/images/resources/main-slider-img-1-3.png";

const slides = [
  {
    bg: sliderBg1,
    img: sliderImg1,
  },
  {
    bg: sliderBg2,
    img: sliderImg2,
  },
  {
    bg: sliderBg3,
    img: sliderImg3,
  },
];

export default function Slider() {
  return (
    <section className="main-slider">
      <div className="main-slider__carousel owl-carousel owl-theme">
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <div
              className="main-slider__bg"
              style={{ backgroundImage: `url(${slide.bg.src})` }}
            ></div>
            <div className="main-slider__shape-1"></div>
            <div className="main-slider__shape-2"></div>
            <div className="main-slider__shape-3"></div>

            <div className="main-slider__img">
              <Image src={slide.img} alt={`Slider ${index + 1}`} />
            </div>

            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__sub-title-box">
                  <p className="main-slider__sub-title">Service Company</p>
                  <div className="main-slider__sub-title-shape"></div>
                </div>
                <h2 className="main-slider__title">
                  Bright Solutions <br /> for Dark Problems
                </h2>
                <p className="main-slider__text">
                  We have been operating for over a decade, providing top-notch
                  sWe have <br /> operating over a decade, providing top-notch
                  services to our clients
                </p>
                <div className="main-slider__btn-box">
                  <a href="about.html" className="main-slider__btn thm-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
