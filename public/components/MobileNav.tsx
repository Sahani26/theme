"use client";

import Image from "next/image";
import logo from "@/public/assets/images/resources/logo-2.png";

export default function MobileNav() {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <Image src={logo} width={140} alt="Logo" />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container"></div>
          {/* /.mobile-nav__container */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@erepair.com">needhelp@erepair.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="thm-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
        <span className="scroll-to-top__text"> Go Back Top</span>
      </a>
    </>
  );
}
