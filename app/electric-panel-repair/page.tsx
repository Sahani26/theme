

import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-5.jpg";
import serviceBoxImg1 from "@/public/assets/images/services/service-details-img-box-img-1.jpg";
import serviceBoxImg2 from "@/public/assets/images/services/service-details-img-box-img-2.jpg";
import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";

export const metadata = {
  title: "Electric Panel Repair | Your Website Name",
  description: "Professional Electric Panel Repair services for homes and businesses.",
};

export default function ElectricPanelRepair() {
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
            <h3>Electric Panel Repair</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span className="icon-angle-right"></span></li>
                <li><a href="/services">Services</a></li>
                <li><span className="icon-angle-right"></span></li>
                <li>Electric Panel Repair</li>
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
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image src={serviceImg} alt="Electric Panel Repair" />
                </div>
                <h3 className="service-details__title-1">Electric Panel Repair</h3>
                <p className="service-details__text-1">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                </p>
                <p className="service-details__text-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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

            <div className="col-xl-4 col-lg-5">
              <div className="service-details__sidebar">
                <OurServiceTab /> 

                <GetStartedToday />
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
