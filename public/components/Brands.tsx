import Image from "next/image"

import brand1 from "@/public/assets/images/brand/brand-1-1.png"
import brand2 from "@/public/assets/images/brand/brand-1-2.png"
import brand3 from "@/public/assets/images/brand/brand-1-3.png"
import brand4 from "@/public/assets/images/brand/brand-1-4.png"
import brand5 from "@/public/assets/images/brand/brand-1-5.png"

export default function Brands() {
  return (
    <section className="brand-one">
      <div className="container">
        <div className="brand-one__inner">
          <div className="brand-one__carousel owl-theme owl-carousel">
            
            <div className="brand-one__single">
              <div className="brand-one__img">
                <Image src={brand1} alt="brand1" />
              </div>
            </div>

            <div className="brand-one__single">
              <div className="brand-one__img">
                <Image src={brand2} alt="brand2" />
              </div>
            </div>

            <div className="brand-one__single">
              <div className="brand-one__img">
                <Image src={brand3} alt="brand3" />
              </div>
            </div>

            <div className="brand-one__single">
              <div className="brand-one__img">
                <Image src={brand4} alt="brand4" />
              </div>
            </div>

            <div className="brand-one__single">
              <div className="brand-one__img">
                <Image src={brand5} alt="brand5" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
