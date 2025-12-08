import Image from "next/image";

import team1 from "@/public/assets/images/team/team-1-1.jpg";
import team2 from "@/public/assets/images/team/team-1-2.jpg";
import team3 from "@/public/assets/images/team/team-1-3.jpg";
import team4 from "@/public/assets/images/team/team-1-4.jpg";
import team5 from "@/public/assets/images/team/team-1-5.jpg";
import team6 from "@/public/assets/images/team/team-1-6.jpg";

import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA"; 

export const metadata = {
    title: "Meet Our Team – Skilled & Experienced Professionals | Your Website Name",
    description: "Explore our team of experienced professionals dedicated to delivering quality and exceptional services.",
};

export default function page() {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <section className="page-header">
                    <div className="page-header__shape-1">
                        <Image src={shape1} alt="" />
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <div className="page-header__img-1">
                                <Image src={headerImg1} alt="" />
                            </div>
                            <h3>Team</h3>
                            <div className="thm-breadcrumb__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><a href="index.html">Home</a></li>
                                    <li><span className="icon-angle-right"></span></li>
                                    <li>Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-page">
                    <div className="container">
                        <div className="row">
                            {/* Team One Single Start */}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team1} alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <a href="#">Wade Warren</a>
                                            </h3>
                                            <p className="team-one__sub-title">Electrician</p>
                                            <div className="team-one__social">
                                                <a href="#"><span className="icon-facebook"></span></a>
                                                <a href="#"><span className="icon-xpa"></span></a>
                                                <a href="#"><span className="icon-link-in"></span></a>
                                                <a href="#"><span className="icon-instagram"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team One Single End */}

                            {/* Team Two */}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team2} alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <a href="#">Darrell Steward</a>
                                            </h3>
                                            <p className="team-one__sub-title">Marketing Manager</p>
                                            <div className="team-one__social">
                                                <a href="#"><span className="icon-facebook"></span></a>
                                                <a href="#"><span className="icon-xpa"></span></a>
                                                <a href="#"><span className="icon-link-in"></span></a>
                                                <a href="#"><span className="icon-instagram"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Team Three */}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team3} alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <a href="#">Warren Wade</a>
                                            </h3>
                                            <p className="team-one__sub-title">Co-founder</p>
                                            <div className="team-one__social">
                                                <a href="#"><span className="icon-facebook"></span></a>
                                                <a href="#"><span className="icon-xpa"></span></a>
                                                <a href="#"><span className="icon-link-in"></span></a>
                                                <a href="#"><span className="icon-instagram"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Team Four */}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team4} alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <a href="#">Wade Barent</a>
                                            </h3>
                                            <p className="team-one__sub-title">Electrician</p>
                                            <div className="team-one__social">
                                                <a href="#"><span className="icon-facebook"></span></a>
                                                <a href="#"><span className="icon-xpa"></span></a>
                                                <a href="#"><span className="icon-link-in"></span></a>
                                                <a href="#"><span className="icon-instagram"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Team Five */}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team5} alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <a href="#">Darrell Mitchel</a>
                                            </h3>
                                            <p className="team-one__sub-title">Marketing Manager</p>
                                            <div className="team-one__social">
                                                <a href="#"><span className="icon-facebook"></span></a>
                                                <a href="#"><span className="icon-xpa"></span></a>
                                                <a href="#"><span className="icon-link-in"></span></a>
                                                <a href="#"><span className="icon-instagram"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Team Six */}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team6} alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <a href="#">Mathe Wade</a>
                                            </h3>
                                            <p className="team-one__sub-title">Co-founder</p>
                                            <div className="team-one__social">
                                                <a href="#"><span className="icon-facebook"></span></a>
                                                <a href="#"><span className="icon-xpa"></span></a>
                                                <a href="#"><span className="icon-link-in"></span></a>
                                                <a href="#"><span className="icon-instagram"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <CTA />
            <Footer /> 
        </>
    )
}
