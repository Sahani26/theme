"use client";

import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import TeamDetails from "@/public/components/Testimonials";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";

export default function TestimonialsPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Header Image" />
            </div>

            <h3>Testimonials</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* ⭐ Your Testimonials Section Here */}
      <section className="testimonials">
        <div className="container">
          <h2 className="text-center mb-4">Our Happy Clients</h2>

          <p className="text-center">
            (Add your testimonials content here… slider, cards, etc.)
          </p>
        </div>
      </section>
<TeamDetails/>
      <CTA />

      <Footer />
    </>
  );
}
