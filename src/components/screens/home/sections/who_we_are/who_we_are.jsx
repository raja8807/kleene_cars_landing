import React from "react";
import styles from "./who_we_are.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import { CheckCircle, StarFill } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import SmallHead from "@/components/common/small_head/small_head";

const WhoWeAreSection = () => {
  return (
    <section className={styles.WhoWeAreSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <Image src="/images/about.jpg" fluid alt="abt" />
          </div>

          <div className={styles.right}>
            <SmallHead>WHO WE ARE</SmallHead>
            <div className={styles.text}>
              <h3>Professional washing & cleaning of your car</h3>
              <p>
                Automated car wash stations save time, allowing for a quick and
                efficient vehicle cleaning process. Many car wash stations offer
                seasonal discounts or promotional offers, making it easier to
                keep your car clean.
              </p>
            </div>
            <div className={styles.bot}>
              <div className={styles.exp}>
                <h4>
                  20<span>+</span>
                </h4>
                <p>
                  Years of
                  <br />
                  experience
                </p>
              </div>
              <div className={styles.points}>
                <p>
                  <CheckCircle /> Offers and car cares
                </p>
                <p>
                  <CheckCircle /> Our expert Teams
                </p>
              </div>
            </div>
            <br />
            <CustomButton variant={3}>Know More</CustomButton>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhoWeAreSection;
