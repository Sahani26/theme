import Image from "next/image";

import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";
import contactImg from "@/public/assets/images/team/team-details-img-1.jpg";
import Header from "@/public/components/Header" 
import Footer from "@/public/components/Footer"
import CTA from "@/public/components/CTA"
export default function Contact() {
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
              <Image src={headerImg1} alt="Contact Header Image" />
            </div>

            <h3>Contact</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Two */}
      <section className="contact-two">
        <div className="container">
          <div className="row">

            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3>
                  <a href="tel:558270575405">+55 827 057 5405</a>
                </h3>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-envelope"></span>
                </div>
                <p>Mail Us</p>
                <h3>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </h3>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-location"></span>
                </div>
                <p>Our Office Location</p>
                <h3>12 Green Road 05 New York</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Three */}
      <section className="contact-three">
        <div className="container">
          <div className="contact-three__inner">
            <div className="row">

              <div className="col-xl-6">
                <div className="contact-three__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="google-map__one"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="contact-three__right">
                  <h3 className="contact-three__form-title">Get A Free Quote</h3>

                  <form
                    id="contact-form"
                    className="contact-form-validated contact-three__form"
                    action="#"
                    method="POST"
                  >
                    <div className="row">

                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input type="number" name="number" placeholder="Mobile" />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input type="text" name="company" placeholder="Company" />
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="contact-three__input-box text-message-box">
                          <textarea name="message" placeholder="Message"></textarea>
                        </div>

                        <div className="contact-three__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-three__btn"
                          >
                            Send a Message
                          </button>
                        </div>
                      </div>

                    </div>
                  </form>

                  <p className="ajax-response mb-0"></p>
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
