"use client";

import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Page Header Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";

export default function FAQPage() {
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

            <h3>Faq</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Faq</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* FAQ Page Start */}
      <section className="faq-page">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-6">
              <div className="faq-page__left">
                <div className="faq-one__right">
                  <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-left">
                    <AccordionItem
                      title="Why is my air conditioner not cooling properly ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <AccordionItem
                      title="How often should I service my air conditioner ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <AccordionItem
                      title="Why is my AC making strange noises ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <AccordionItem
                      title="Why is my cell Phone not working properly ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-6">
              <div className="faq-page__right">
                <div className="faq-one__right">
                  <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-right">
                    <AccordionItem
                      title="Why is my air conditioner not cooling properly ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <AccordionItem
                      title="How often should I service my air conditioner ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <AccordionItem
                      title="Why is my AC making strange noises ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <AccordionItem
                      title="Why is my cell Phone not working properly ?"
                      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* FAQ Page End */}

      <CTA />
      <Footer />
    </>
  );
}

// ⭐ Accordion Item Component
function AccordionItem({ title, content }: { title: string; content: string }) {
  return (
    <div className="accrodion">
      <div className="accrodion-title">
        <h4>{title}</h4>
      </div>
      <div className="accrodion-content">
        <div className="inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
