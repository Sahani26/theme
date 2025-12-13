import Image from "next/image";
import footerLogo from "@/public/assets/images/resources/Footer-Logo.png";

import footerShape from "@/public/assets/images/shapes/footer-shape-1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__shape-1 float-bob-x">
        <Image src={footerShape} alt="Footer Shape" />
      </div>

      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            {/* About Widget */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__logo">
                  <Link href="index.html">
                    <Image src={footerLogo} alt="Footer Logo" />
                  </Link>
                </div>
                <p className="footer-widget__about-text">
                  Secure other greater pleasures, or else he endures<br />
                  pains to avoid worse pains to the selection point.<br /> But in certain circumstances
                </p>
                <div className="site-footer__social">
                  <a href="#"><i className="icon-facebook"></i></a>
                  <a href="#"><i className="icon-xpa"></i></a>
                  <a href="#"><i className="icon-link-in"></i></a>
                  <a href="#"><i className="icon-instagram"></i></a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget__column footer-widget__usefull-link">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Our Company</h3>
                </div>
                <div className="footer-widget__link-box">
                  <ul className="footer-widget__link list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget__column footer-widget__services">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Our Service</h3>
                </div>
                <ul className="footer-widget__link list-unstyled">
                  <li><a href="electric-panel-repair.html">Electric Repair</a></li>
                  <li><a href="lighting-fixtures.html">Lighting & Fixture</a></li>
                  <li><a href="maintenance-service.html">European Lard Sration</a></li>
                  <li><a href="maintenance-service.html">Electric Maintenance</a></li>
                  <li><a href="installing-ceiling-fan.html">Colling Service</a></li>

                   <li><Link href="admin/add-blog">add-blog</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Widget */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="footer-widget__column footer-widget__contact">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Contact us</h3>
                </div>
                <ul className="footer-widget__contact-list list-unstyled">
                  <li>
                    <h3>Address</h3>
                    <div className="content">
                      <p>2972 Westheimer Rd. Santa <br /> Ana, Illinois 8548</p>
                    </div>
                  </li>
                  <li>
                    <h3>Contact</h3>
                    <div className="content">
                      <p><a href="tel:8528525285505">+85 2852 5285 505</a></p>
                      <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p className="site-footer__bottom-text">Copyright 2024. All rights reserved</p>
            <ul className="list-unstyled site-footer__bottom-menu">
              <li><a href="contact.html">Support</a></li>
              <li><a href="about.html">Terms and Condition</a></li>
              <li><a href="about.html">Privacy and Policy</a></li>
              <li><Link href="admin/add-blog">add-blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
