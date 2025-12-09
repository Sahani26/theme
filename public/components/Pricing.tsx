import Image from "next/image";
import shape1 from "@/public/assets/images/shapes/pricing-one-shape-1.png";

export default function Pricing() {
 const plans = [
  {
    name: "Basic Plan",
    duration: "Per Month",
    price: "₹1,499",
    points: [
      "Home Electrical Repairs",
      "Minor Plumbing Work",
      "AC & Fan Servicing",
      "Customer Support via WhatsApp",
    ],
    delay: "100ms",
  },
  {
    name: "Regular Plan",
    duration: "6 Months",
    price: "₹7,499",
    points: [
      "All Basic Services",
      "Appliance Installation",
      "Leakage & Pipe Repairs",
      "Priority Customer Support",
    ],
    delay: "200ms",
  },
  {
    name: "Premium Plan",
    duration: "Annual",
    price: "₹13,999",
    points: [
      "All Regular Services",
      "Full Home Maintenance",
      "Electrical & Plumbing Annual Checkup",
      "24x7 Support & Emergency Services",
    ],
    delay: "300ms",
  },
];


  return (
    <section className="pricing-one">
      <div className="pricing-one__shape-1">
        <Image src={shape1} alt="pricing shape" />
      </div>

      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Pricing</span>
          </div>
          <div className="section-title__title-box sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Lighting the Way to <br />Quality Repairs
            </h2>
          </div>
        </div>

        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={plan.delay}
            >
              <div className="pricing-one__single">
                <div className="pricing-one__price-pack">
                  <div className="pricing-one__price-month">
                    <h3>{plan.name}</h3>
                    <p>{plan.duration}</p>
                  </div>
                  <h2>{plan.price}</h2>
                </div>
                <div className="pricing-one__points-and-btn">
                  <ul className="pricing-one__price-points list-unstyled">
                    {plan.points.map((point, i) => (
                      <li key={i}>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="pricing-one__btn thm-btn">
                      Get Started
                    </a>
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
