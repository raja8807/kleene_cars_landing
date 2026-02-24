import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SmallHead from "@/components/common/small_head/small_head";
import { Image } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
const AboutSection = () => {
  const workingHours = [
    { day: "Monday", time: "8.00am - 19.00pm" },
    { day: "Tuesday", time: "8.00am - 19.00pm" },
    { day: "Wednesday", time: "8.00am - 19.00pm" },
    { day: "Thursday", time: "8.00am - 19.00pm" },
    { day: "Friday", time: "8.00am - 19.00pm" },
    { day: "Saturday", time: "9.00am - 17.00pm" },
    { day: "Sunday", time: "Close" },
  ];

  return (
    <section className={styles.AboutSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.head}>
            <SmallHead>About Us</SmallHead>
            <h4>Drive away with a fresh, clean, & polished car every time.</h4>
          </div>

          <div className={styles.wrap}>
            <div className={styles.left}>
              <p className={styles.cap}>
                Welcome to <span>KleeneCars</span> car wash, where your vehicle
                gets the shine it deserves!
              </p>

              <p className={styles.text}>
                We use quality products and expert care to make every ride look
                brand new. Drive in today and leave with a sparkling clean car
                and a smile!
              </p>

              <div>
                <p>
                  <CheckCircle />
                  Same Day Availability
                </p>

                <p>
                  <CheckCircle />
                  Affordable Pricing
                </p>

                <p>
                  <CheckCircle />5 star detailers
                </p>

                <p>
                  <CheckCircle />
                  100% Customers Satisfaction
                </p>
              </div>
            </div>
            <div className={styles.mid}>
              <Image src="/images/about-car.png" fluid />
            </div>

            <div className={styles.right}>
              <h4>Working Hours</h4>
              <div className={styles.time}>
                {workingHours.map((wh) => (
                  <div key={wh.day}>
                    <p>{wh.day}</p>
                    <p>{wh.time}</p>
                  </div>
                ))}
                <CustomButton>Book Now</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
