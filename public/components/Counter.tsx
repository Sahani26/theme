"use client";

import { useEffect, useState } from "react";

interface CounterItem {
  iconClass: string;
  count: number;
  text: string;
  delay: string;
  extraClass?: string;
}

const counters: CounterItem[] = [
  {
    iconClass: "icon-hands-on-experience",
    count: 20,
    text: "Years of experience",
    delay: "100ms",
    extraClass: "counter-one__single-1",
  },
  {
    iconClass: "icon-technician-1",
    count: 360,
    text: "Expert Team Member",
    delay: "100ms",
  },
  {
    iconClass: "icon-project-complete",
    count: 800,
    text: "Project Completed",
    delay: "100ms",
  },
  {
    iconClass: "icon-happy-customer",
    count: 760,
    text: "Happy customer",
    delay: "100ms",
  },
];

export default function Counter() {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      const stepTime = Math.floor(2000 / counter.count); // animation duration 2s
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < counter.count) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="counter-one">
      <div className="container">
        <div className="counter-one__inner">
          <div className="row">
            {counters.map((counter, i) => (
              <div
                key={i}
                className={`col-xl-3 col-lg-6 col-md-6 wow fadeInUp`}
                data-wow-delay={counter.delay}
              >
                <div className={`counter-one__single ${counter.extraClass || ""}`}>
                  <div className="counter-one__icon">
                    <span className={counter.iconClass}></span>
                  </div>
                  <div className="counter-one__count-box">
                    <h3 className="odometer">{counts[i].toString().padStart(2, "0")}</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">{counter.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
