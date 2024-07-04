import { FunctionComponent } from "react";
import HallItem from "./HallItem";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.hallItemParent, className].join(" ")}>
      <HallItem />
      <div className={styles.imageSlider}>
        <div className={styles.imgContent}>
          <img
            className={styles.imgContentIcon}
            alt=""
            src="/img-content@2x.png"
          />
          <img className={styles.flippingIcon} alt="" src="/-flipping@2x.png" />
          <img
            className={styles.flippingIcon1}
            loading="lazy"
            alt=""
            src="/-flipping1@2x.png"
          />
        </div>
      </div>
      <HallItem bulletPointMarginLeft="unset" />
      <div className={styles.imgContent1}>
        <img
          className={styles.imgContentIcon1}
          alt=""
          src="/img-content1@2x.png"
        />
        <img className={styles.flippingIcon2} alt="" src="/-flipping@2x.png" />
        <img
          className={styles.flippingIcon3}
          loading="lazy"
          alt=""
          src="/-flipping1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
