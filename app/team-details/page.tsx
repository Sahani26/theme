 

import Image from "next/image";

import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";
import teamDetailsImg from "@/public/assets/images/team/team-details-img-1.jpg";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
export const metadata = {
  title: "Team Member Details | Your Website Name",
  description: "Explore detailed profile, biography, skills, and experience of our team member.",
};

export default function TeamDetails() {
  return (
    <>
    <Header/>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg1} alt="header image" />
            </div>

            <h3>Team Details</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Team Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="team-details">
        <div className="container">
          <div className="team-details__inner">
            <div className="row">
              
              {/* LEFT SIDE */}
              <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                  <div className="team-details__img">
                    <Image src={teamDetailsImg} alt="team member" />
                  </div>

                  <div className="team-details__contact-box">
                    <h3 className="team-details__contact-title">Contact info</h3>

                    <ul className="team-details__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-envelope"></span>
                        </div>
                        <p>
                          <a href="mailto:example@email.com">
                            example@email.com
                          </a>
                        </p>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-phone-call"></span>
                        </div>
                        <p>
                          <a href="tel:+13330000000">+1(333) 000-0000</a>
                        </p>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-location"></span>
                        </div>
                        <p>915 Hill Street, USA</p>
                      </li>
                    </ul>

                    <div className="team-details__social">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                  <h3 className="team-details__title-1">Susan Sarandom</h3>
                  <p className="team-details__sub-title">Founder and CEO</p>

                  <p className="team-details__text-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </p>

                  <h3 className="team-details__title-2">Professional Skills</h3>

                  <p className="team-details__text-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt...
                  </p>

                  <ul className="team-details__progress-list list-unstyled">
                    <li className="team-details__progress">
                      <h4 className="team-details__progress-title">
                        Repair Device
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="90%">
                          <div className="count-text">90%</div>
                        </div>
                      </div>
                    </li>

                    <li className="team-details__progress">
                      <h4 className="team-details__progress-title">
                        Replace Device
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="85%">
                          <div className="count-text">85%</div>
                        </div>
                      </div>
                    </li>

                    <li className="team-details__progress">
                      <h4 className="team-details__progress-title">
                        Diagnostics
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="80%">
                          <div className="count-text">80%</div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <CTA/>
      <Footer/>
    </>
  );
}
