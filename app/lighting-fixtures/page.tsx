import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";

export default function LightingFixturesPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image
            src="/assets/images/shapes/page-header-shape-1.png"
            alt=""
            width={500}
            height={300}
          />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image
                src="/assets/images/resources/page-header-img-1.png"
                alt=""
                width={300}
                height={300}
              />
            </div>

            <h3>Lighting & Fixtures</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Lighting & Fixtures</li>
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
                  <Image
                    src="/assets/images/services/service-details-img-3.jpg"
                    alt=""
                    width={800}
                    height={450}
                  />
                </div>

                <h3 className="service-details__title-1">Lighting & Fixtures</h3>

                <p className="service-details__text-1">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="service-details__text-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  {[
                    "It is a long established fact that a reader will be distracted",
                    "Readable content of a page when looking at its layout",
                    "Content of a page when looking at its layout point",
                    "Reader will be distracted by readable content",
                  ].map((text, index) => (
                    <li key={index}>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>

                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src="/assets/images/services/service-details-img-box-img-1.jpg"
                            alt=""
                            width={400}
                            height={250}
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-lamp"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              Quality Full Work
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src="/assets/images/services/service-details-img-box-img-2.jpg"
                            alt=""
                            width={400}
                            height={250}
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-chirger"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              100% Work Satisfaction
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore.
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
              <OurServiceTab/>

              <GetStartedToday/>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Service Details End */}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}
