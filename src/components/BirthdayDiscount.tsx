import { FunctionComponent } from "react";
import styles from "./BirthdayDiscount.module.css";

export type BirthdayDiscountType = {
  className?: string;
  image10?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const BirthdayDiscount: FunctionComponent<BirthdayDiscountType> = ({
  className = "",
  image10,
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div className={[styles.birthdayDiscount, className].join(" ")}>
      <div className={styles.discountDetails}>
        <img
          className={styles.image10Icon}
          loading="lazy"
          alt=""
          src={image10}
        />
        <div className={styles.div}>
          <p className={styles.p}>{prop}</p>
          <p className={styles.p1}>{prop1}</p>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.div1}>{prop2}</div>
      </div>
    </div>
  );
};

export default BirthdayDiscount;
