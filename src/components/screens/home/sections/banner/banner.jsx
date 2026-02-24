import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const BannerSection = () => {
  return (
    <div className={styles.BannerSection}>
      <div className={styles.bannerLg}>
        <div className={styles.topContainer}>
          <CustomContainer>
            <div className={styles.top}>
              <div>
                <h2 data-aos="fade-right">Premier</h2>
                <p data-aos="fade-up" data-aos-delay="500">
                  Where professional care meets spotless cleaning for every
                  vehicle.
                </p>
              </div>
            </div>
          </CustomContainer>
        </div>

        <div className={styles.bottomContainer}>
          <CustomContainer>
            <h2 data-aos="fade-left" data-aos-delay="200">
              car wash
            </h2>
          </CustomContainer>
        </div>
      </div>

      <div className={styles.bannerSm}>
        <div>
          <CustomContainer>
            <h2 className={styles.r}>PREMIER</h2>
            <h2 className={styles.w}>CAR WASH</h2>
          </CustomContainer>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

//  <CustomContainer>
//         <div className={styles.cont}>
//           <h1>
//             Horizon View Tech
//           </h1>
//           <p>
//             MNC Project Enablement & Vendor Consulting
//           </p>
//           {/* <div className={styles.bgImg}>
//             <Image src="/images/bg_img.png" />
//           </div> */}
//         </div>
//       </CustomContainer>
