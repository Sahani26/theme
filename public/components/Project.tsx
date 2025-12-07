import Image from "next/image";
import project1 from "@/public/assets/images/project/project-1-1.jpg";
import project2 from "@/public/assets/images/project/project-1-2.jpg";
import project3 from "@/public/assets/images/project/project-1-3.jpg";
import project4 from "@/public/assets/images/project/project-1-4.jpg";
import project5 from "@/public/assets/images/project/project-1-5.jpg";
import project6 from "@/public/assets/images/project/project-1-6.jpg";

export default function Project() {
  const projects = [
    { img: project1, subtitle: "Express Electric", title: "debris stuck in the outdoor", delay: "100ms", col: "col-xl-6 col-lg-6 col-md-6", popup: project1 },
    { img: project2, subtitle: "Express Electric", title: "debris stuck in the outdoor", delay: "300ms", col: "col-xl-3 col-lg-6 col-md-6", popup: project2 },
    { img: project3, subtitle: "Express Electric", title: "debris stuck in the outdoor", delay: "600ms", col: "col-xl-3 col-lg-6 col-md-6", popup: project3 },
    { img: project4, subtitle: "Express Electric", title: "debris stuck in the outdoor", delay: "900ms", col: "col-xl-3 col-lg-6 col-md-6", popup: project4 },
    { img: project5, subtitle: "Express Electric", title: "debris stuck in the outdoor", delay: "1000ms", col: "col-xl-3 col-lg-6 col-md-6", popup: project5 },
    { img: project6, subtitle: "Express Electric", title: "debris stuck in the outdoor", delay: "1100ms", col: "col-xl-6 col-lg-6 col-md-6", popup: project6 },
  ];

  return (
    <section className="project-one">
      <div className="container">
        <div className="project-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Gallery</span>
            </div>
            <div className="section-title__title-box sec-title-animation animation-style2">
              <h2 className="section-title__title title-animation">
                Your Brightest <br />Choice in Repairs
              </h2>
            </div>
          </div>
          <div className="project-one__btn-box">
            <a href="projects.html" className="project-one__btn thm-btn">all Gallery</a>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.col} wow fadeInUp`}
              data-wow-delay={project.delay}
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <Image src={project.img} alt={project.title} />
                    <div className="project-one__arrow">
                      <a href={project.popup.src} className="img-popup">
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{project.subtitle}</p>
                    <h3 className="project-one__title">
                      <a href="project-details.html">{project.title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
