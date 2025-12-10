import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";

export default function ServicesPage() {
  return (
    <>
    <Header/>
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

            <h3>Services</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Services Page Start */}
      <section className="services-two services-page">
        <div className="services-two__shape-1 img-bounce">
          <Image
            src="/assets/images/shapes/services-two-shape-1.png"
            alt=""
            width={400}
            height={300}
          />
        </div>

        <div className="container">
          <div className="row">

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-socket"></span>
                </div>
                <p className="services-two__sub-title">Service Type 1</p>
                <h3 className="services-two__title">
                  <Link href="/electric-panel-repair">Electric Repair</Link>
                </h3>
                <p className="services-two__text">
                  The wise man therefore always desi holds in these matters electri to this of principle selection
                </p>
                <Link href="/electric-panel-repair" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-ceiling-lamp"></span>
                </div>
                <p className="services-two__sub-title">Service Type 2</p>
                <h3 className="services-two__title">
                  <Link href="/lighting-fixtures">Lighting & Fixtures</Link>
                </h3>
                <p className="services-two__text">
                  The wise man therefore always desi holds in these matters electri to this of principle selection
                </p>
                <Link href="/lighting-fixtures" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-ceiling-lamp-2"></span>
                </div>
                <p className="services-two__sub-title">Service Type 3</p>
                <h3 className="services-two__title">
                  <Link href="/maintenance-service">Maintenance Service</Link>
                </h3>
                <p className="services-two__text">
                  The wise man therefore always desi holds in these matters electri to this of principle selection
                </p>
                <Link href="/maintenance-service" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="700ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-smart-lighting"></span>
                </div>
                <p className="services-two__sub-title">Service Type 4</p>
                <h3 className="services-two__title">
                  <Link href="/short-circuit-repair">Short circuit repair</Link>
                </h3>
                <p className="services-two__text">
                  The wise man therefore always desi holds in these matters electri to this of principle selection
                </p>
                <Link href="/short-circuit-repair" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="900ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-ceiling-lamp"></span>
                </div>
                <p className="services-two__sub-title">Service Type 5</p>
                <h3 className="services-two__title">
                  <Link href="/commercial-services">Commercial services</Link>
                </h3>
                <p className="services-two__text">
                  The wise man therefore always desi holds in these matters electri to this of principle selection
                </p>
                <Link href="/commercial-services" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="1100ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-settings-1"></span>
                </div>
                <p className="services-two__sub-title">Service Type 6</p>
                <h3 className="services-two__title">
                  <Link href="/installing-ceiling-fan">installing a ceiling fan</Link>
                </h3>
                <p className="services-two__text">
                  The wise man therefore always desi holds in these matters electri to this of principle selection
                </p>
                <Link href="/installing-ceiling-fan" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services Page End */}
      <CTA/>
      <Footer/>
    </>
  );
}
