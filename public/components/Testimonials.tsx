"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonials() {
  return (
    <section className="testimonial-one">
      <div className="container">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          swipeable
          emulateTouch
          className="testimonial-one__carousel"
        >
          {/* Testimonial 1 */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src="/assets/images/testimonial/testimonial-1-1.jpg"
                  alt="Arlene McCoy"
                />
              </div>

              <div className="testimonial-one__content">
                <div className="testimonial-one__quote">
                  <span className="icon-quote"></span>
                </div>

                <p className="testimonial-one__text">
                  “Adipiscing elit, sed do eiusmod tempor incididunt ut labored
                  etos dolore magna aliquant. Ut enim ad minim veniam nostrud
                  exercitation ullamco laboris nisi ut aliquip”
                </p>

                <div className="testimonial-one__ratting">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>

                <div className="testimonial-one__client-info">
                  <h3>
                    <a href="/testimonials">Arlene McCoy</a>
                  </h3>
                  <p>Co-founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src="/assets/images/testimonial/testimonial-1-2.jpg"
                  alt="Wade Warrent"
                />
              </div>

              <div className="testimonial-one__content">
                <div className="testimonial-one__quote">
                  <span className="icon-quote"></span>
                </div>

                <p className="testimonial-one__text">
                  “Adipiscing elit, sed do eiusmod tempor incididunt ut labored
                  etos dolore magna aliquant. Ut enim ad minim veniam nostrud
                  exercitation ullamco laboris nisi ut aliquip”
                </p>

                <div className="testimonial-one__ratting">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>

                <div className="testimonial-one__client-info">
                  <h3>
                    <a href="/testimonials">Wade Warrent</a>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
