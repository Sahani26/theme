 

import Image from "next/image";
 import Header from "@/public/components/Header";   
 import CTA from "@/public/components/CTA";
 import Footer from "@/public/components/Footer";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-6.jpg";
import serviceBoxImg1 from "@/public/assets/images/services/service-details-img-box-img-1.jpg";
import serviceBoxImg2 from "@/public/assets/images/services/service-details-img-box-img-2.jpg";

export const metadata = {
  title: "Commercial Services | Your Website Name",
  description: "Professional Commercial Services for businesses and organizations.",
};

export default function CommercialServices() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="shape" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="header" />
            </div>
            <h3>Commercial Services</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span className="icon-angle-right"></span></li>
                <li><a href="/services">Services</a></li>
                <li><span className="icon-angle-right"></span></li>
                <li>Commercial Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Service Details Start */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image src={serviceImg} alt="Commercial Services" />
                </div>
                <h3 className="service-details__title-1">Commercial Services</h3>
                <p className="service-details__text-1">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                </p>
                <p className="service-details__text-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Distracted by the readable content of a page when looking at its layout.</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Content of a page when looking at its layout toile point.</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Reader will be distracted by the readable content of a page when looking.</p>
                  </li>
                </ul>

                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image src={serviceBoxImg1} alt="Quality Full Work" />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-lamp"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">Quality Full Work</h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Velit esse quam nihil molestiae consequatur.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image src={serviceBoxImg2} alt="100% Work Satisfaction" />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-chirger"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">100% Work Satisfaction</h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Velit esse quam nihil molestiae consequatur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__sidebar">
                <div className="service-details__services-box">
                  <h3 className="service-details__services-title">Our Service</h3>
                  <ul className="service-details__services-list list-unstyled">
                    <li><a href="/services/electric-panel-repair">Electric Panel Repair<span className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/short-circuit-repair">Short Circuit Repair<span className="icon-arrow-right"></span></a></li>
                    <li className="active"><a href="/services/commercial-services">Commercial Services<span className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/installing-ceiling-fan">Installing a Ceiling Fan<span className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/lighting-fixtures">Lighting & Fixtures<span className="icon-arrow-right"></span></a></li>
                    <li><a href="/services/maintenance-service">Maintenance Service<span className="icon-arrow-right"></span></a></li>
                  </ul>
                </div>

                <div className="project-details__get-started">
                  <h3 className="project-details__get-started-title">Get Started Today</h3>
                  <p className="project-details__get-started-text">
                    Pianissimos of dulcimers qui therefore always holds in these matters to this principle
                  </p>
                  <ul className="project-details__get-started-points list-unstyled">
                    <li>
                      <div className="icon"><span className="icon-call"></span></div>
                      <p><a href="tel:585858575084">+58 585 857 5084</a></p>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-envelope"></span></div>
                      <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-location"></span></div>
                      <p>4517 Washington Ave. Manchester,<br /> Kentucky 39495</p>
                    </li>
                  </ul>
                  <div className="project-details__get-started-btn-box">
                    <a href="#" className="project-details__get-started-btn thm-btn">Get in touch</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Service Details End */}

      <CTA />
      <Footer />
    </>
  );
}
