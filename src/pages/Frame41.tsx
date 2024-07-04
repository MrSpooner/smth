import { FunctionComponent } from "react";
import styles from "./Frame41.module.css";

const Frame4: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.wrapper}>
        <div className={styles.div1}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.galleryTitleContainer}>
          <div className={styles.div2}>НАША ФОТОГАЛЕРЕЯ</div>
        </div>
        <div className={styles.galleryImages}>
          <div className={styles.imagePairContainer}>
            <div className={styles.quoteOpenContainer}>
              <div className={styles.div3}>“</div>
            </div>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.secondImageContainer}>
            <img
              className={styles.imgIcon1}
              loading="lazy"
              alt=""
              src="/img@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.quoteCloseContainerParent}>
        <div className={styles.quoteCloseContainer}>
          <div className={styles.div4}>“</div>
        </div>
        <div className={styles.imgParent}>
          <img
            className={styles.imgIcon2}
            loading="lazy"
            alt=""
            src="/img1@2x.png"
          />
          <div className={styles.container}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
