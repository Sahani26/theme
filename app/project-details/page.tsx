import Image from "next/image";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import project1 from "@/public/assets/images/project/project-details-img-1.jpg";
import textImg from "@/public/assets/images/project/project-details-text-img.jpg";
import pointsImg from "@/public/assets/images/project/project-details-points-img.jpg";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
export default function ProjectDetails() {
  return (
    <>
    <Header/>
      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Header" />
            </div>

            <h3>Project Details</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Project Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Project Details Start */}
      <section className="project-details">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-8 col-lg-7">
              <div className="project-details__left">

                <div className="project-details__img">
                  <Image src={project1} alt="Project Details" />
                </div>

                <h3 className="project-details__title-1">About The Project Overview</h3>
                <p className="project-details__text-1">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  laborer et dolore magna aliqua...
                </p>

                <h3 className="project-details__title-2">The Project Challenge</h3>
                <p className="project-details__text-2">
                  Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris...
                </p>

                <div className="project-details__text-and-img">
                  <p className="project-details__text-3">
                    The wise man therefore always holds in these matters to this principle...
                  </p>
                  <div className="project-details__text-img">
                    <Image src={textImg} alt="Text Image" />
                  </div>
                </div>

                <h3 className="project-details__title-3">The Result Of Our Project</h3>
                <p className="project-details__text-4">
                  Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris...
                </p>

                <div className="project-details__img-and-points">
                  <div className="project-details__points-img">
                    <Image src={pointsImg} alt="Details Points" />
                  </div>

                  <ul className="project-details__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Fact that a reader will be distracted...</p>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Readable content of a page...</p>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Looking at its layout...</p>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Readable content of a page...</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-4 col-lg-5">
              <div className="project-details__sidebar">

                <div className="project-details__information">
                  <h3 className="project-details__information-title">
                    Project Information
                  </h3>

                  <ul className="project-details__information-list list-unstyled">
                    <li>
                      <h4>Client :</h4>
                      <p>Jonathan Smith</p>
                    </li>
                    <li>
                      <h4>Category :</h4>
                      <p>Upgrade Old Wiring</p>
                    </li>
                    <li>
                      <h4>Date :</h4>
                      <p>02 June 2024</p>
                    </li>
                    <li>
                      <h4>Location :</h4>
                      <p>12 Green Road 05 New York</p>
                    </li>
                  </ul>
                </div>

                <div className="project-details__get-started">
                  <h3 className="project-details__get-started-title">
                    Get Started Today
                  </h3>
                  <p className="project-details__get-started-text">
                    Pianissimos of dulcimers qui therefore always holds in these matters...
                  </p>

                  <ul className="project-details__get-started-points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <p>
                        <a href="tel:585858575084">+58 585 857 5084</a>
                      </p>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <p>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </p>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-location"></span>
                      </div>
                      <p>
                        4517 Washington Ave. Manchester,
                        <br /> Kentucky 39495
                      </p>
                    </li>
                  </ul>

                  <div className="project-details__get-started-btn-box">
                    <a href="#" className="project-details__get-started-btn thm-btn">
                      get in touch
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Project Details End */}
      <CTA/>
      <Footer/>
    </>
  );
}
