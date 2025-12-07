"use client"; // Needed if using client-side carousel like Owl Carousel

export default function Testimonials() {
  return (
    <section className="testimonial-one">
      <div className="container">
        <div className="testimonial-one__carousel owl-theme owl-carousel">
          {/* Testimonial 1 */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img src="/assets/images/testimonial/testimonial-1-1.jpg" alt="" />
              </div>
              <div className="testimonial-one__content">
                <div className="testimonial-one__quote">
                  <span className="icon-quote"></span>
                </div>
                <p className="testimonial-one__text">
                  “Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip
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
                    <a href="testimonials.html">Arlene McCoy</a>
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
                <img src="/assets/images/testimonial/testimonial-1-2.jpg" alt="" />
              </div>
              <div className="testimonial-one__content">
                <div className="testimonial-one__quote">
                  <span className="icon-quote"></span>
                </div>
                <p className="testimonial-one__text">
                  “Adipiscing elit, sed do eiusmod tempor incididunt ut labored etos dolore magna aliquant. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip
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
                    <a href="testimonials.html">Wade Warrent</a>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
