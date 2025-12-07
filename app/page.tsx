import Image from "next/image";
import Header from '../public/components/Header'
import Service from '../public/components/Service'
// import Hero from '../public/components/Hero'
// import ServicesOne from '../public/components/ServicesOne'
import About from '../public/components/About'
import ServicesTwo from "@/public/components/ServicesTwo";
import Testimonials from '../public/components/Testimonials'
import Brands from '../public/components/Brands'
import Video from '../public/components/Video'
import Counter from '../public/components/Counter'
import Project from '../public/components/Project'
import Pricing from '../public/components/Pricing'
import Blog from '../public/components/Blog'
import CTA from '../public/components/CTA'
import Footer from '../public/components/Footer'
import Sleder from '../public/components/Slider'

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Sleder />
        <Service />

        <About />
        <ServicesTwo />
        <Testimonials />
        <Brands />
        <Project />
        <Video />
        <Counter />
        <Pricing />
        <Blog />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
