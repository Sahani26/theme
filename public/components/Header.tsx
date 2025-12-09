"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/images/resources/header-logo.png"

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

   useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;

        /* ---------- Sticky Header ---------- */
        const stickyMenus = document.querySelectorAll(".stricked-menu");
        stickyMenus.forEach((menu) => {
            if (scrollY > 130) {
                menu.classList.add("stricky-fixed");
            } else {
                menu.classList.remove("stricky-fixed");
            }
        });

        /* ---------- One Page Sticky Header ---------- */
        const onePageHeader = document.querySelector(".sticky-header--one-page");
        if (onePageHeader) {
            if (scrollY > 130) {
                onePageHeader.classList.add("active");
            } else {
                onePageHeader.classList.remove("active");
            }
        }

        /* ---------- Scroll To Top Button ---------- */
        const scrollToTopBtn = document.querySelector(".scroll-to-top");
        if (scrollToTopBtn) {
            if (scrollY > 500) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        }

        /* ---------- Scroll progress (width decrease) ---------- */
        const scrollInner = document.querySelector<HTMLElement>(".scroll-to-top__inner");

        if (scrollInner) {
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercent = Math.min((scrollY / docHeight) * 100, 100);

            // width decreases on scroll
            scrollInner.style.width = `${100 - scrollPercent}%`;
        }

        setIsSticky(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);


    // Lock body scroll when mobile nav or search is open
    useEffect(() => {
        if (isMobileNavOpen || isSearchOpen) {
            document.body.classList.add("locked");
        } else {
            document.body.classList.remove("locked");
        }

        return () => {
            document.body.classList.remove("locked");
        };
    }, [isMobileNavOpen, isSearchOpen]);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        if (isSearchOpen) setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isMobileNavOpen) setIsMobileNavOpen(false);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    const toggleDropdown = (id: string) => {
        setExpandedDropdowns(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Add your search logic here
        }
    };

    const MenuItem = ({ href, children, dropdown, dropdownId, items }: any) => {
        const hasDropdown = dropdown && items;
        const isExpanded = expandedDropdowns.includes(dropdownId);

        return (
            <li className={`${hasDropdown ? 'dropdown' : ''} ${isExpanded ? 'expanded' : ''}`}>
                {hasDropdown ? (
                    <>
                        <a href="#">{children}</a>
                        <ul style={{ display: isExpanded ? 'block' : '' }}>
                            {items.map((item: any, index: number) => (
                                <MenuItem key={index} {...item} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <Link href={href} className={isActive(href) ? 'current' : ''}>
                        {children}
                    </Link>
                )}
            </li>
        );
    };

    const MobileMenuItem = ({ href, children, dropdown, dropdownId, items }: any) => {
        const hasDropdown = dropdown && items;
        const isExpanded = expandedDropdowns.includes(dropdownId);

        return (
            <li className={`${hasDropdown ? 'dropdown' : ''} ${isExpanded ? 'expanded' : ''}`}>
                {hasDropdown ? (
                    <>
                        <a href="#">
                            {children}
                            <button
                                className={`dropdown-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown(dropdownId);
                                }}
                                aria-label="dropdown toggler"
                            >
                                <i className="fa fa-angle-down"></i>
                            </button>
                        </a>
                        <ul style={{ display: isExpanded ? 'block' : 'none' }}>
                            {items.map((item: any, index: number) => (
                                <MobileMenuItem key={index} {...item} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <Link href={href} onClick={closeMobileNav}>
                        {children}
                    </Link>
                )}
            </li>
        );
    };

    const menuData = [
        { href: "/", children: "Home" },
        { href: "/about-us", children: "About Us" },
        {
            dropdown: true,
            dropdownId: "pages",
            children: "Pages",
            items: [
                { href: "/team", children: "Team" },
                { href: "/team-details", children: "Team Details" },
                {
                    dropdown: true,
                    dropdownId: "projects",
                    children: "Projects",
                    items: [
                        { href: "/projects", children: "Projects" },
                        { href: "/project-details", children: "Project Details" }
                    ]
                },
                { href: "/testimonials", children: "Testimonials" },
                { href: "/pricing", children: "Pricing" },
                { href: "/faq", children: "Faq" },
                { href: "/404", children: "404 Error" },
                { href: "/coming-soon", children: "Coming Soon" }
            ]
        },
        {
            dropdown: true,
            dropdownId: "services",
            children: "Services",
            items: [
                { href: "/services", children: "Services" },
                { href: "/electric-panel-repair", children: "Electric Panel Repair" },
                { href: "/short-circuit-repair", children: "Short Circuit Repair" },
                { href: "/commercial-services", children: "Commercial Services" },
                { href: "/installing-ceiling-fan", children: "Installing Ceiling Fan" },
                { href: "/lighting-fixtures", children: "Lighting Fixtures" },
                { href: "/maintenance-service", children: "Maintenance Service" }
            ]
        },
        {
            dropdown: true,
            dropdownId: "shop",
            children: "Shop",
            items: [
                { href: "/shop", children: "Products" },
                { href: "/shop-details", children: "Products Details" },
                { href: "/cart", children: "Cart" },
                { href: "/checkout", children: "Checkout" },
                { href: "/wishlist", children: "Wishlist" },
                { href: "/account", children: "My Account" }
            ]
        },
        {
            dropdown: true,
            dropdownId: "blog",
            children: "Blog",
            items: [
                { href: "/blog", children: "Blog" },
                { href: "/blog-list", children: "Blog List" },
                { href: "/blog-details", children: "Blog Details" }
            ]
        },
        { href: "/contact", children: "Contact" }
    ];

    return (
        <>
            <header className="main-header" ref={headerRef}>
                {/* Top Bar */}
                <div className="main-menu__top">
                    <div className="main-menu__top-inner">
                  <ul className="list-unstyled main-menu__contact-list">
    {/* Email */}
    <li>
        <div className="icon">
            <i className="fa fa-envelope"></i>
        </div>
        <div className="text header-mail">
            <p>
                <a href="mailto:example@gmail.com">
                    example@gmail.com
                </a>
            </p>
        </div>
    </li>

    {/* Call */}
    <li>
        <div className="icon header-call">
            <i className="fa fa-phone"></i>
        </div>
        <div className="text">
            <p>
                <a href="tel:+919695839080">
                    +91 96958 39080
                </a>
            </p>
        </div>
    </li>

    {/* Location */}
    <li>
        <div className="icon header-map">
            <i className="fa fa-map-marker"></i>
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
                                            src={Logo}
                                            alt="logo"
                                            width={180}
                                            height={60}
                                        />
                                    </Link>
                                </div>

                                <div className="main-menu__main-menu-box">
                                    <a
                                        href="#"
                                        className="mobile-nav__toggler"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleMobileNav();
                                        }}
                                    >
                                        <i className="fa fa-bars"></i>
                                    </a>

                                    {/* Desktop Menu */}
                                    <ul className="main-menu__list">
                                        {menuData.map((item, index) => (
                                            <MenuItem key={index} {...item} />
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="main-menu__right">
                                <div className="main-menu__search-and-btn-box">
                                    {/* <div className="main-menu__search-box">
                                        <a
                                            href="#"
                                            className="main-menu__search search-toggler icon-search-interface-symbol"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleSearch();
                                            }}
                                        ></a>
                                    </div> */}

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

            {/* Sticky Header */}
            <div className={`stricky-header stricked-menu main-menu ${isSticky ? 'stricky-fixed' : ''}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link href="/">
                                            <Image
                                                src={Logo}
                                                alt="logo"
                                                width={150}
                                                height={50}
                                            />
                                        </Link>
                                    </div>

                                    <div className="main-menu__main-menu-box">
                                        <ul className="main-menu__list">
                                            {menuData.map((item, index) => (
                                                <MenuItem key={index} {...item} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu__right">
                                    <div className="main-menu__search-and-btn-box">
                                        {/* <div className="main-menu__search-box">
                                            <a
                                                href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleSearch();
                                                }}
                                            ></a>
                                        </div> */}

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
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav__wrapper ${isMobileNavOpen ? 'expanded' : ''}`}>
                <div
                    className="mobile-nav__overlay mobile-nav__toggler"
                    onClick={toggleMobileNav}
                ></div>

                <div className="mobile-nav__content">
                    <span
                        className="mobile-nav__close mobile-nav__toggler"
                        onClick={toggleMobileNav}
                    >
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image">
                            <Image
                                src={Logo}
                                width={140}
                                height={50}
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            {menuData.map((item, index) => (
                                <MobileMenuItem key={index} {...item} />
                            ))}
                        </ul>
                    </div>

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

                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-pinterest-p"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Popup */}
            <div className={`search-popup ${isSearchOpen ? 'active' : ''}`}>
                <div
                    className="search-popup__overlay search-toggler"
                    onClick={toggleSearch}
                ></div>

                <div className="search-popup__content">
                    <div className="search-form-wrapper">
                        <label htmlFor="search" className="sr-only">
                            search here
                        </label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search Here..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        <button
                            onClick={handleSearch}
                            aria-label="search submit"
                            className="thm-btn"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <a
                href="#"
                className="scroll-to-target scroll-to-top"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <span className="scroll-to-top__wrapper">
                    <span className="scroll-to-top__inner"></span>
                </span>
                <span className="scroll-to-top__text">Go Back Top</span>
            </a>


        </>
    );
}