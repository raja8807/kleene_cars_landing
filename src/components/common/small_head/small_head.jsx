import React from "react";
import styles from "./small_head.module.scss";
import { StarFill } from "react-bootstrap-icons";

const SmallHead = ({ children }) => {
  return (
    <div className={styles.smallHead}>
      <StarFill />
      <p>{children}</p>
    </div>
  );
};

export default SmallHead;
