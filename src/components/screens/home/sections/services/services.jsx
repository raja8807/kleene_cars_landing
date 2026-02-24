import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SmallHead from "@/components/common/small_head/small_head";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ServiceCard = () => {
  return (
    <div
      className={styles.ServiceCard}
      style={{
        backgroundImage: `url(/images/service.jpg)`,
      }}
    >
      <div>
        <p className={styles.top}>10 Mins</p>

        <div>
          <h3>Preassure Wash</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur cupiditate dolor similique mollitia harum voluptates sit
            rem quaerat a animi!
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];

  return (
    <section className={styles.ServicesSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.head}>
            <SmallHead>Our Services</SmallHead>
            <h4>Premium Waterless Cleaning at your Door-Step!</h4>
          </div>

          <div className={styles.wrap}>
            {services.map((service) => (
              <ServiceCard key={service.id} />
            ))}
          </div>

          <div className={styles.cta}>
            <CustomButton>See All Services</CustomButton>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesSection;
