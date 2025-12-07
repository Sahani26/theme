import Image from "next/image";
import blog1 from "@/public/assets/images/blog/blog-1-1.jpg";
import blog2 from "@/public/assets/images/blog/blog-1-2.jpg";
import blog3 from "@/public/assets/images/blog/blog-1-3.jpg";

export default function Blog() {
  const blogs = [
    {
      img: blog1,
      date: "12<br>Nov",
      title: "Elase They Endures Pains to Avoid The Worse Pains Taken",
      delay: "100ms",
    },
    {
      img: blog2,
      date: "12<br>Nov",
      title: "Regular maintenance cleaning or replacing air filters",
      delay: "300ms",
    },
    {
      img: blog3,
      date: "12<br>Nov",
      title: "Water leakage can be due to a clogged drain line",
      delay: "600ms",
    },
  ];

  return (
    <section className="blog-one">
      <div className="container">
        <div className="blog-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">blog & News</span>
            </div>
            <div className="section-title__title-box sec-title-animation animation-style2">
              <h2 className="section-title__title title-animation">
                Your Brightest Choice
                <br /> in Repairs
              </h2>
            </div>
          </div>
          <div className="blog-one__btn-box">
            <a href="blog.html" className="blog-one__btn thm-btn">View all Blog</a>
          </div>
        </div>

        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={blog.delay}
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <Image src={blog.img} alt={blog.title} />
                    <Image src={blog.img} alt={blog.title} />
                    <a href="blog-details.html" className="blog-one__link">
                      <span className="sr-only"></span>
                    </a>
                  </div>
                  <div className="blog-one__date" dangerouslySetInnerHTML={{ __html: blog.date }} />
                </div>

                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <p><span className="icon-user"></span>By Admin</p>
                  </div>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html">{blog.title}</a>
                  </h3>
                  <a href="blog-details.html" className="blog-one__learn-more">
                    Learn More<span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
