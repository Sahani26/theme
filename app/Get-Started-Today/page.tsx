import Link from "next/link"

export default function GetStartedToday() {
  return (
    <>
     <div className="project-details__get-started">
                  <h3 className="project-details__get-started-title">Get Started Today</h3>
                  <p className="project-details__get-started-text">
                    Pianissimos of dulcimers qui therefore always holds in these matters to this principle
                  </p>
                  <ul className="project-details__get-started-points list-unstyled">
                    <li>
                      <div className="icon"><span className="icon-call"></span></div>
                      <p><a href="tel:585858575084">+58 585 857 5084</a></p>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-envelope"></span></div>
                      <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-location"></span></div>
                      <p>4517 Washington Ave. Manchester,<br /> Kentucky 39495</p>
                    </li>
                  </ul>
                  <div className="project-details__get-started-btn-box">
                    <a href="#" className="project-details__get-started-btn thm-btn">Get in touch</a>
                  </div>
                </div>
    </>
  )
}
