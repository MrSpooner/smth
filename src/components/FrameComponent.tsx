import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.quoteContainerWrapper, className].join(" ")}>
      <div className={styles.quoteContainer}>
        <div className={styles.quoteContent}>
          <div className={styles.quoteIcon}>
            <div className={styles.div}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className={styles.div1}>
              <img
                className={styles.vectorIcon1}
                loading="lazy"
                alt=""
                src="/vector3.svg"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
