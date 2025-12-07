"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
      

            <header className="main-header">
                {/* Top Bar */}
                <div className="main-menu__top">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <a href="mailto:example@gamil.com">
                                            example@gamil.com
                                        </a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-location"></i>
                                </div>
                                <div className="text">
                                    <p>12 Green Road, 05 New York</p>
                                </div>
                            </li>
                        </ul>

                        <div className="main-menu__top-right">
                            <div className="main-menu__social">
                                <a href="#"><i className="icon-facebook"></i></a>
                                <a href="#"><i className="icon-xpa"></i></a>
                                <a href="#"><i className="icon-link-in"></i></a>
                                <a href="#"><i className="icon-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Nav */}
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">

                            {/* Logo + Menu */}
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <Image
                                            src="/assets/images/resources/logo-1.png"
                                            alt="logo"
                                            width={150}
                                            height={50}
                                        />
                                    </Link>
                                </div>

                                <div className="main-menu__main-menu-box">
                                    <a href="#" className="mobile-nav__toggler">
                                        <i className="fa fa-bars"></i>
                                    </a>

                                    {/* Menu List */}
                                    <ul className="main-menu__list">
                                        <li className="dropdown">
                                            <Link href="/">Home</Link>
                                            <ul>
                                                <li><Link href="/">Home One</Link></li>
                                                <li><Link href="/index2">Home Two</Link></li>
                                                <li><Link href="/index3">Home Three</Link></li>
                                                <li><Link href="/index-dark">Home Dark</Link></li>

                                                <li className="dropdown">
                                                    <a href="#">Header Styles</a>
                                                    <ul>
                                                        <li><Link href="/">Header One</Link></li>
                                                        <li><Link href="/index2">Header Two</Link></li>
                                                        <li><Link href="/index3">Header Three</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="dropdown">
                                                    <a href="#">One Page Styles</a>
                                                    <ul>
                                                        <li><Link href="/index-one-page">One Page One</Link></li>
                                                        <li><Link href="/index2-one-page">One Page Two</Link></li>
                                                        <li><Link href="/index3-one-page">One Page Three</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li><Link href="/about-us">About Us</Link></li>

                                        {/* Pages Dropdown */}
                                        <li className="dropdown">
                                            <a href="#">Pages</a>
                                            <ul>
                                                <li><Link href="/team">Team</Link></li>
                                                <li><Link href="/team-details">Team Details</Link></li>

                                                <li className="dropdown">
                                                    <a href="#">Projects</a>
                                                    <ul>
                                                        <li><Link href="/projects">Projects</Link></li>
                                                        <li><Link href="/project-details">Project Details</Link></li>
                                                    </ul>
                                                </li>

                                                <li><Link href="/testimonials">Testimonials</Link></li>
                                                <li><Link href="/pricing">Pricing</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                                <li><Link href="/404">404 Error</Link></li>
                                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                                            </ul>
                                        </li>

                                        {/* Services */}
                                        <li className="dropdown">
                                            <a href="#">Services</a>
                                            <ul>
                                                <li><Link href="/services">Services</Link></li>
                                                <li><Link href="/electric-panel-repair">Electric Panel Repair</Link></li>
                                                <li><Link href="/short-circuit-repair">Short Circuit Repair</Link></li>
                                                <li><Link href="/commercial-services">Commercial Services</Link></li>
                                                <li><Link href="/installing-ceiling-fan">Installing Ceiling Fan</Link></li>
                                                <li><Link href="/lighting-fixtures">Lighting Fixtures</Link></li>
                                                <li><Link href="/maintenance-service">Maintenance Service</Link></li>
                                            </ul>
                                        </li>

                                        {/* Shop */}
                                        <li className="dropdown">
                                            <a href="#">Shop</a>
                                            <ul>
                                                <li><Link href="/shop">Products</Link></li>
                                                <li><Link href="/shop-details">Products Details</Link></li>
                                                <li><Link href="/cart">Cart</Link></li>
                                                <li><Link href="/checkout">Checkout</Link></li>
                                                <li><Link href="/wishlist">Wishlist</Link></li>
                                                <li><Link href="/account">My Account</Link></li>
                                            </ul>
                                        </li>

                                        {/* Blog */}
                                        <li className="dropdown">
                                            <a href="#">Blog</a>
                                            <ul>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/blog-list">Blog List</Link></li>
                                                <li><Link href="/blog-details">Blog Details</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="main-menu__right">
                                <div className="main-menu__search-and-btn-box">
                                    <div className="main-menu__search-box">
                                        <a href="#" className="main-menu__search search-toggler icon-search-interface-symbol"></a>
                                    </div>

                                    <div className="main-menu__btn-box">
                                        <Link href="/contact" className="main-menu__btn thm-btn">
                                            Get a quote
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
            {/* stricky-header */}
             <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
          {/* stricky-header */}
      </>
    );
}
