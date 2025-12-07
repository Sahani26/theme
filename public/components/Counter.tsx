export default function Counter() {
  return (
    <section className="counter-one">
      <div className="container">
        <div className="counter-one__inner">
          <div className="row">

            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="counter-one__single counter-one__single-1">
                <div className="counter-one__icon">
                  <span className="icon-hands-on-experience"></span>
                </div>
                <div className="counter-one__count-box">
                  <h3 className="odometer" data-count="20">00</h3>
                  <span>+</span>
                </div>
                <p className="counter-one__text">Years of experience</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-technician-1"></span>
                </div>
                <div className="counter-one__count-box">
                  <h3 className="odometer" data-count="360">00</h3>
                  <span>+</span>
                </div>
                <p className="counter-one__text">Expert Team Member</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-project-complete"></span>
                </div>
                <div className="counter-one__count-box">
                  <h3 className="odometer" data-count="800">00</h3>
                  <span>+</span>
                </div>
                <p className="counter-one__text">Project Completed</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-happy-customer"></span>
                </div>
                <div className="counter-one__count-box">
                  <h3 className="odometer" data-count="760">00</h3>
                  <span>+</span>
                </div>
                <p className="counter-one__text">Happy customer</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
