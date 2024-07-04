import { FunctionComponent } from "react";
import styles from "./Frame41.module.css";

const Frame4: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.header}>
        <div className={styles.div1}>НАША ФОТОГАЛЕРЕЯ</div>
      </div>
      <div className={styles.content}>
        <img className={styles.imgIcon} alt="" src="/img@2x.png" />
        <img className={styles.imgIcon1} alt="" src="/img1@2x.png" />
        <img className={styles.imgIcon2} alt="" src="/img1@2x.png" />
        <div className={styles.div2}>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        </div>
        <img className={styles.icon} alt="" src="/1@2x.png" />
      </div>
      <div className={styles.div3}>“</div>
      <div className={styles.div4}>“</div>
    </div>
  );
};

export default Frame4;
