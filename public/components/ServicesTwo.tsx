"use client";
export default function ServicesTwo() {
  return (
    <section className="services-two">
      <div className="services-two__shape-1 img-bounce">
        <img src="/assets/images/shapes/services-two-shape-1.png" alt="" />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Services</span>
          </div>
          <div className="section-title__title-box sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Current Solutions for Your
              <br />
              Modern Problems
            </h2>
          </div>
        </div>

        <div className="row">
          {/* Service 1 */}
          <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
            <div className="services-two__single">
              <div className="services-two__icon">
                <span className="icon-socket"></span>
              </div>
              <p className="services-two__sub-title">Service Type 1</p>
              <h3 className="services-two__title">
                <a href="electric-panel-repair.html">Electric Repair</a>
              </h3>
              <p className="services-two__text">
                The wise man therefore always desi holds in these matters
                electri to this of principle selection
              </p>
              <a href="electric-panel-repair.html" className="services-two__learn-more">
                Learn More
                <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="services-two__single">
              <div className="services-two__icon">
                <span className="icon-ceiling-lamp"></span>
              </div>
              <p className="services-two__sub-title">Service Type 2</p>
              <h3 className="services-two__title">
                <a href="lighting-fixtures.html">Lighting & Fixtures</a>
              </h3>
              <p className="services-two__text">
                The wise man therefore always desi holds in these matters
                electri to this of principle selection
              </p>
              <a href="lighting-fixtures.html" className="services-two__learn-more">
                Learn More
                <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
            <div className="services-two__single">
              <div className="services-two__icon">
                <span className="icon-ceiling-lamp-2"></span>
              </div>
              <p className="services-two__sub-title">Service Type 3</p>
              <h3 className="services-two__title">
                <a href="maintenance-service.html">Maintenance Service</a>
              </h3>
              <p className="services-two__text">
                The wise man therefore always desi holds in these matters
                electri to this of principle selection
              </p>
              <a href="maintenance-service.html" className="services-two__learn-more">
                Learn More
                <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
