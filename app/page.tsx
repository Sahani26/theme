
import Header from '../public/components/Header'
import Service from '../public/components/Service' 
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
import Preloader from '@/public/components/Preloader';
import MobileNav from '@/public/components/MobileNav';

export default function Home() {
  return (
    <>
    {/* <Preloader/> */}
      <div className="page-wrapper">
        <Header />
        <Sleder />
        <Service />
        <About />
        <ServicesTwo />
        <Testimonials />
        <Brands />
        <Video />
        <Counter />
         <Project />
        <Pricing />
        <Blog />
        
        <CTA />
        <Footer />
      </div>
      {/* <MobileNav/> */}
    </>
  );
}
