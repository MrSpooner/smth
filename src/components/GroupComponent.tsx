import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  advantagesCards?: string;
  prop?: string;
  prop1?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  advantagesCards,
  prop,
  prop1,
}) => {
  return (
    <div className={[styles.advantagesCardsParent, className].join(" ")}>
      <img
        className={styles.advantagesCardsIcon}
        loading="lazy"
        alt=""
        src={advantagesCards}
      />
      <div className={styles.advantagesContent}>
        <div className={styles.div}>
          <p className={styles.p}>{prop}</p>
          <p className={styles.p1}>{prop1}</p>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
