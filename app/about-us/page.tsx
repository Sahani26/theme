import Image from "next/image";

import shape1 from "@/public/assets/images/shapes/about-one-shape-1.png";
import pageheader from "@/public/assets/images/resources/page-header-img-1.png";
import About from "@/public/components/About";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";


// ⭐ Add Meta Title Here
export const metadata = {
  title: "About Us | Your Website Name",
  description: "Learn more about our company, mission, and services.",
};

// 👉 THIS MAKES THE PAGE SSR
export default async function Page() {

  // (Optional SSR data fetch example)
  // const res = await fetch("https://api.example.com/about", {
  //   cache: "no-store"     // Always server request (SSR)
  // });
  // const data = await res.json();

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className="page-header">
          <div className="page-header__shape-1">
            <Image src={shape1} alt="shape1" />
          </div>
          <div className="container">
            <div className="page-header__inner">
              <div className="page-header__img-1">
                <Image src={pageheader} alt="shape1" />
              </div>
              <h3>About Us</h3>
              <div className="thm-breadcrumb__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <span className="icon-angle-right"></span>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <About />
      <CTA />
      <Footer />
    </>
  );
}
